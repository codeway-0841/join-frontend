export default ({ isAuth, values, errors }) => {
  const rules = {
    email: value => {
      if (!value) {
        errors.email = "Enter E-Mail";
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        errors.email = "Invalid E-Mail";
      }
    },
    password: value => {
      if (!value) {
        errors.password = "Enter password";
      } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(value)) {
        errors.password = isAuth ? "Invalid password" : "Password too light";
      }
    }
  };

  Object.keys(values).forEach(key => rules[key] && rules[key](values[key]));
};
