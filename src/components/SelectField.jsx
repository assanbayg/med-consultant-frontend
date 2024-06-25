const SelectField = ({
  name,
  id,
  value,
  onChange,
  required,
  options,
  label,
  error,
}) => (
  <div className="mb-4 text-left">
    <label htmlFor={id} className="block mb-1">
      {label}
    </label>
    <select
      name={name}
      id={id}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full px-4 py-2 border outline-none border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
    >
      <option value="">Select an option</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
    {error && <div className="text-red-600">{error}</div>}
  </div>
);

export default SelectField;
