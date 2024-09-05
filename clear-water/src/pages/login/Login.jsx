import { useCallback, useEffect } from "react";
import useAuthStore from "../../stores/use-auth-store";

const Login = () => {
    const { user, loginGoogleWithPopup, observeAuthState } = useAuthStore();

    useEffect(() => {
        observeAuthState();
    }, [observeAuthState]);

    const onHandlerLogin = useCallback(() => {
        loginGoogleWithPopup();
    }, [loginGoogleWithPopup]);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md text-center">
                <h1 className="text-3xl font-bold mb-4">
                    hola: {user ? user.displayName : "Invitado"}
                </h1>
                <div className="flex justify-center">
                    <button
                        onClick={onHandlerLogin}
                        className="bg-white text-gray-700 font-semibold py-2 px-4 border border-gray-300 rounded shadow hover:bg-gray-100 flex items-center justify-center"
                    >
                        <img
                            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                            alt="Google"
                            className="w-5 h-5 mr-2"
                        />
                        Log in with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;