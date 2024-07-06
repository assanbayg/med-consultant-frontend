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
  <div className="text-left">
    <input
      name={name}
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className="w-full resize-y rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-indigo-500 dark:focus:ring-indigo-500"
    />
    {error && <div className="text-red-600">{error}</div>}
  </div>
);

export default InputField;
