import { useCallback, useEffect } from "react";
import useAuthStore from "../../stores/use-auth-store";
import Swal from "sweetalert2";

const Login = () => {
    const {  loginGoogleWithPopup, observeAuthState, registerGoogleWithPopup } = useAuthStore();

    useEffect(() => {
        observeAuthState();
    }, [observeAuthState]);

    const onHandlerLogin = useCallback(async () => {
        const userLogin = await loginGoogleWithPopup();
        if (!userLogin) {
            Swal.fire({
                icon: 'error',
                title: 'Usuario no encontrado',
                text: 'Por favor, regístrate primero.',
            });
        } else {
            // navegar a imagen 3d
        }
    }, [loginGoogleWithPopup]);

    const onHandlerRegister = useCallback(async () => {
        const userRegister = await registerGoogleWithPopup();
        if (userRegister) {
            Swal.fire({
                icon: 'error',
                title: 'Usuario ya registrado',
                text: 'Por favor, inicia sesión.',
            });
        } else {
            // navegar a imagen 3d
        }
    }, [registerGoogleWithPopup]);

 

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-gradient-to-r from-blue-400 to-blue-600 p-8 rounded shadow-md text-center">
                <img
                    src="/img/logo.jpeg" 
                    alt="Logo de la empresa"
                    className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h2 className="text-xl font-semibold mb-6">El agua es vida; no mates nuestro futuro.</h2>
                <div className="flex justify-center space-x-4">
                    <button
                        onClick={onHandlerLogin}
                        className="bg-white text-gray-700 font-semibold py-2 px-4 border border-gray-300 rounded shadow hover:bg-gray-100 flex items-center justify-center"
                    >
                        <img
                            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                            alt="Google"
                            className="w-5 h-5 mr-2"
                        />
                        Ingresar con Google
                    </button>
                    <button
                        onClick={onHandlerRegister}
                        className="bg-white text-gray-700 font-semibold py-2 px-4 border border-gray-300 rounded shadow hover:bg-gray-100 flex items-center justify-center"
                    >
                        <img
                            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                            alt="Google"
                            className="w-5 h-5 mr-2"
                        />
                        Registrarse con Google
                    </button>
                   
                </div>
            </div>
        </div>
    );
};

export default Login;