export default ({isAuth, errors, values}) => {
  const rules = {
    email: value => {
      if (!value) {
        errors.email = 'Введите E-Mail';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        errors.email = 'Некорректный E-Mail';
      }
    },
    username: value => {
      if (!value) {
        errors.username = 'Введите имя';
      }
    },
    password: value => {
      if (!value) {
        errors.password = 'Введите пароль';
      } else if (
        !isAuth &&
        !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(value)
      ) {
        errors.password = 'Слишком лёгкий пароль';
      }
    },
    password_2: value => {
      if (!value) {
        errors.password_2 = 'Введите пароль повторно';
      } else if (!isAuth && value !== values.password) {
        errors.password_2 = "Пароли не совпадают";
      }
    }
  };
  Object.keys(values).forEach(key => rules[key] && rules[key](values[key]));
};
