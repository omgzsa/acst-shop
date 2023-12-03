const errorMessage = ref(''); // Error message to be displayed
const isValid = ref(null); // Validation status

export function validateEmail(email) {
  errorMessage.value = ''; // Clear previous error
  isValid.value = null; // Reset validation status

  // Email required validation
  if (!email.trim()) {
    errorMessage.value = 'E-mail cím megadása kötelező!';
  } else {
    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errorMessage.value = 'Nem megfelelő e-mail cím formátum!';
    }
  }
  return {
    errorMessage: errorMessage.value,
    isValid: !errorMessage.value ? true : false,
  };
}

export function validatePassword(password) {
  errorMessage.value = ''; // Clear previous error
  isValid.value = null; // Reset validation status

  // Password length validation
  if (password.length < 8) {
    errorMessage.value = 'Password must be at least 8 characters long';
  } else {
    // Password uppercase character validation
    const uppercaseRegex = /[A-Z]/;
    if (!uppercaseRegex.test(password)) {
      errorMessage.value =
        'Password must contain at least 1 uppercase character';
    }

    // Password number validation
    const numberRegex = /\d/;
    if (!numberRegex.test(password)) {
      errorMessage.value = 'Password must contain at least 1 number';
    }
  }
  return {
    errorMessage,
    isValid,
  };
}
