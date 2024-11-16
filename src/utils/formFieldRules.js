const passwordRules = [
  {
    required: true,
    message: "Please input your password!",
  },
  {
    min: 6,
    message: "Password must be 6 characters long",
  },
  {
    pattern: /[A-Z]/,
    message: "Password must contain at least one uppercase letter.",
  },
  {
    pattern: /\d/,
    message: "Password must contain at least one numeric character.",
  },
  {
    pattern: /[!@#$%^&*(),.?":{}|<>]/,
    message: "Password must contain at least one special character.",
  },
];

const confirmPasswordRules = [
  {
    required: true,
    message: "Please confirm your password!",
  },
  ({ getFieldValue }) => ({
    validator(_, value) {
      if (!value || getFieldValue("password") === value) {
        return Promise.resolve();
      }
      return Promise.reject(new Error("The two passwords do not match!"));
    },
  }),
];

export { passwordRules, confirmPasswordRules };
