const TextareaField = ({
  name,
  id,
  value,
  onChange,
  required,
  label,
  error,
}) => (
  <div className="mb-4">
    <label htmlFor={id} className="block mb-1 text-left">
      {label}
    </label>
    <textarea
      name={name}
      id={id}
      value={value}
      onChange={onChange}
      required={required}
      placeholder="Type here..."
      className="w-full px-4 py-2 border outline-none border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500 resize-y min-h-24"
    ></textarea>
    {error && <div className="text-red-600">{error}</div>}
  </div>
);

export default TextareaField;
