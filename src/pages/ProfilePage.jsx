import useForm from "../hooks/useForm";

export default function ProfilePage() {
  const { values, errors, handleChange, handleSubmit } = useForm({
    healthRating: "",
    symptoms: "",
    loremIpsum: "",
  });

  function submitForm() {
    alert("Forms Data:", values);
  }

  const inputClasses =
    "w-full px-4 py-2 border outline-none border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500";
  const errorClasses = "text-red-600";

  return (
    <>
      <p className="text-4xl font-medium mb-4">Personal Account</p>
      <form onSubmit={handleSubmit(submitForm)}>
        <div className="mb-6 text-left">
          <label htmlFor="healthRating" className="block mb-1">
            How would you rate your health?
          </label>
          <select
            name="healthRating"
            id="healthRating"
            value={values.healthRating}
            onChange={handleChange}
            required
            className={inputClasses}
          >
            <option value="">Select an option</option>
            <option value="Good">Good</option>
            <option value="Average">Average</option>
            <option value="Poor">Poor</option>
          </select>
          {errors.healthRating && (
            <div className={errorClasses}>{errors.healthRating}</div>
          )}
        </div>
        <div className="mb-6">
          <label htmlFor="symptoms" className="block mb-1">
            Please describe any symptoms you are experiencing
          </label>
          <textarea
            name="symptoms"
            id="symptoms"
            value={values.symptoms}
            onChange={handleChange}
            required
            className={`${inputClasses} resize-y min-h-32`}
          ></textarea>
          {errors.symptoms && (
            <div className={errorClasses}>{errors.symptoms}</div>
          )}
        </div>
        <div className="mb-6 text-left">
          <label htmlFor="loremIpsum" className="block mb-1">
            Some question about the health?
          </label>
          <select
            name="loremIpsum"
            id="loremIpsum"
            value={values.loremIpsum}
            onChange={handleChange}
            required
            className={inputClasses}
          >
            <option value="">Select an option</option>
            <option value="Good">Good</option>
            <option value="Average">Average</option>
            <option value="Poor">Poor</option>
          </select>
          {errors.loremIpsum && (
            <div className={errorClasses}>{errors.loremIpsum}</div>
          )}
        </div>
        <button type="submit" className="w-full primary-btn">
          Save information
        </button>
      </form>
    </>
  );
}
