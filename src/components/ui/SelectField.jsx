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
    <label htmlFor={id} className="mb-1 block">
      {label}
    </label>
    <select
      name={name}
      id={id}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-indigo-500 dark:focus:ring-indigo-500"
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
