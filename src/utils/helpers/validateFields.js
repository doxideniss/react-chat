export default (errors, touched) => {
  return (key) => {
    if (touched[key]) {
      if (errors[key]) {
        return "error";
      } else {
        return "success";
      }
    } else {
      return "";
    }
  }
};
