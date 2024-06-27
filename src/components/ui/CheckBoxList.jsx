import { useEffect, useState } from "react";

const Checkbox = ({ label, name, isChecked, onChange }) => (
  <label>
    <input
      type="checkbox"
      name={name}
      checked={isChecked}
      onChange={onChange}
    />
    {label}
  </label>
);

const CheckBoxList = ({ options, values, onChange }) => {
  const [selectedOptions, setSelectedOptions] = useState(values);

  useEffect(() => {
    setSelectedOptions(values);
  }, [values]);

  const handleChange = (event) => {
    const { name, checked } = event.target;
    setSelectedOptions({
      ...selectedOptions,
      [name]: checked,
    });
    onChange(event);
  };

  return (
    <div className="flex flex-col text-left">
      {Object.keys(options).map((option) => (
        <Checkbox
          key={option}
          label={options[option]}
          name={option}
          isChecked={selectedOptions[option]}
          onChange={handleChange}
        />
      ))}
    </div>
  );
};

export default CheckBoxList;
