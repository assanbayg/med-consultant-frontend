import { useState } from "react";

const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (callback) => (e) => {
    e.preventDefault();
    if (validate()) {
      callback();
      setValues(initialValues);
    }
  };

  const validate = () => {
    let tempErrors = {};
    tempErrors.healthRating = values.healthRating
      ? ""
      : "This field is required.";
    tempErrors.symptoms = values.symptoms ? "" : "This field is required.";

    setErrors({ ...tempErrors });
    return Object.values(tempErrors).every((x) => x === "");
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
