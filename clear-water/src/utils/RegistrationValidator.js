import UserDao from "../daos/UserDao";


const validateName = async (name) => {
  const errors = [];
  if (!name) {
    errors.push("El nombre de usuario es requerido");
  } else {
    if (username.length < 6) {
      errors.push("El nombre de usuario debe tener al menos 6 caracteres");
    }
    if (/[^a-zA-Z0-9\s]/.test(name)) {
      errors.push(
        "El nombre de usuario no debe contener caracteres especiales"
      );
    }
  }
  return errors;
};

const validateEmail = async (email) => {
  console.log(email);
  
  const errors = [];
  if (!email) {
    errors.push("El correo electrónico es requerido");
  } else {
    const emailExists = await UserDao.checkUserInDB(email);
    console.log(emailExists);
    
    if (emailExists) {
      errors.push("El correo electrónico ya existe");
    }
  }
  return errors;
};

const validatePassword = (password) => {
  const errors = [];
  if (!password) {
    errors.push("La contraseña es requerida");
  } else if (password.length < 6) {
    errors.push("La contraseña debe tener al menos 6 caracteres");
  }
  return errors;
};

const validateConfirmPassword = (password, confirmPassword) => {
  const errors = [];
  if (password !== confirmPassword) {
    errors.push("Las contraseñas no coinciden");
  }
  return errors;
};

export {
  validateName,
  validateEmail,
  validatePassword,
  validateConfirmPassword,
};
