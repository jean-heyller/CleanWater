import { useState, useEffect, useCallback } from "react";
import { getFirestore, setDoc, doc, getDoc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import useAuthStore from "../../stores/use-auth-store";

const Login = () => {
    const { user, setUser, observeAuthState } = useAuthStore();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [isRegistering, setIsRegistering] = useState(true); // Determines whether to register or login

    useEffect(() => {
        observeAuthState();
    }, [observeAuthState]);

    const handleSubmit = useCallback(async (e) => {
        e.preventDefault();
        setLoading(true);
        const auth = getAuth();
        const db = getFirestore();

        try {
            if (isRegistering) {
                // Register a new user
                const result = await createUserWithEmailAndPassword(auth, email, password);
                const user = result.user;
                const userRef = doc(db, "users", user.uid);
                
                // Save user to Firestore
                await setDoc(userRef, {
                    uid: user.uid,
                    email: user.email,
                    displayName: user.displayName || '',
                    photoURL: user.photoURL || '',
                });
                setUser(user);
            } else {
                // Sign in an existing user
                const result = await signInWithEmailAndPassword(auth, email, password);
                const user = result.user;
                const userRef = doc(db, "users", user.uid);
                
                // Check if user exists in Firestore
                const userDoc = await getDoc(userRef);
                if (userDoc.exists()) {
                    setUser(user);
                } else {
                    console.error("User not found in Firestore");
                }
            }
        } catch (error) {
            console.error("Error during authentication:", error);
        } finally {
            setLoading(false);
        }
    }, [email, password, isRegistering, setUser]);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md text-center">
                <h1 className="text-3xl font-bold mb-4">
                    Hola: {user ? user.displayName || user.email : "Invitado"}
                </h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-lg font-medium text-gray-700 mb-1">
                            Correo Electrónico
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div>
                        <label className="block text-lg font-medium text-gray-700 mb-1">
                            Contraseña
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white font-semibold py-2 px-4 border border-blue-600 rounded shadow hover:bg-blue-600 flex items-center justify-center"
                            disabled={loading}
                        >
                            {loading ? (
                                <span>Cargando...</span>
                            ) : (
                                isRegistering ? "Registrar" : "Iniciar sesión"
                            )}
                        </button>
                    </div>
                </form>
                <div className="mt-4">
                    <button
                        onClick={() => setIsRegistering(!isRegistering)}
                        className="text-blue-500 underline"
                    >
                        {isRegistering ? "¿Ya tienes una cuenta? Inicia sesión" : "¿No tienes una cuenta? Regístrate"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
