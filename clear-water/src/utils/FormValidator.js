const validateName = async (name) => {
  const errors = [];

  if (name.length < 6) {
    errors.push("El nombre de usuario debe tener al menos 6 caracteres");
  }
  if (/[^a-zA-Z0-9ñÑ\s]/.test(name)) {
    errors.push("El nombre de usuario no debe contener caracteres especiales");
  }

  return errors;
};

const validatePassword = (password) => {
  const errors = [];

  if (password.length < 6)
    errors.push("La contraseña debe tener al menos 6 caracteres");

  return errors;
};

const validateConfirmPassword = (password, confirmPassword) => {
  const errors = [];

  if (password !== confirmPassword) errors.push("Las contraseñas no coinciden");

  return errors;
};


export {
  validateName,
  validatePassword,
  validateConfirmPassword,
};
