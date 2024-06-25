const InputField = ({
  name,
  id,
  type,
  value,
  onChange,
  placeholder,
  required,
  error,
}) => (
  <div className="mb-4 text-left">
    <input
      name={name}
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className="w-full px-4 py-2 border outline-none border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500 resize-y"
    />
    {error && <div className="text-red-600">{error}</div>}
  </div>
);

export default InputField;
