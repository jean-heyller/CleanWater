import { useCallback, useEffect } from "react";
import Swal from "sweetalert2";

const GoogleButton = ({ type, navigateTo, useAuthStore }) => {
  const { loginGoogleWithPopup, observeAuthState, registerGoogleWithPopup } =
    useAuthStore();

  useEffect(() => {
    observeAuthState();
  }, [observeAuthState]);

  const handleAuth = useCallback(async () => {
    let user;
    if (type === "login") {
      user = await loginGoogleWithPopup();
      if (!user) {
        Swal.fire({
          icon: "error",
          title: "Usuario no encontrado",
          text: "Por favor, regístrate primero.",
          position: "center",
        });
        return;
      }
    } else if (type === "register") {
      user = await registerGoogleWithPopup();
      if (user) {
        Swal.fire({
          icon: "error",
          title: "Usuario ya registrado",
          text: "Por favor, inicia sesión.",
          position: "center",
        });
        return;
      }
    }
    navigateTo("/home");
  }, [type, loginGoogleWithPopup, registerGoogleWithPopup, navigateTo]);

  const buttonText = type === "login" ? "Ingresar con Google" : "Registrarse con Google";

  return (
    <button
      type="button"
      onClick={handleAuth}
      className="w-full bg-white text-gray-700 font-semibold py-2 px-4 border border-gray-300 rounded shadow hover:bg-gray-100 flex items-center justify-center"
    >
      <img
        src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
        alt="Google"
        className="w-5 h-5 mr-2"
      />
      {buttonText}
    </button>
  );
};

export default GoogleButton;
