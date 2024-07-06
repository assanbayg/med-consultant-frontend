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
    <label htmlFor={id} className="mb-1 block text-left">
      {label}
    </label>
    <textarea
      name={name}
      id={id}
      value={value}
      onChange={onChange}
      required={required}
      placeholder="Type here..."
      className="min-h-24 w-full resize-y rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-indigo-500 dark:focus:ring-indigo-500"
    ></textarea>
    {error && <div className="text-red-600">{error}</div>}
  </div>
);

export default TextareaField;
