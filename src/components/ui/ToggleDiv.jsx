import { useState } from "react";

const ToggleDiv = ({ title, children, isTitle = false }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleDiv = () => setIsExpanded(!isExpanded);

  return (
    <div
      className={`flex flex-col rounded-md border-2 border-gray-200 px-4 pt-2 dark:border-gray-700`}
    >
      <button onClick={toggleDiv}>
        <p
          className={`${
            isTitle
              ? "mb-2 py-2 text-4xl font-medium"
              : "pb-2 text-left text-2xl font-medium text-indigo-400"
          } ${isExpanded ? "my-2" : ""}`}
        >
          {title}
        </p>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isExpanded ? "max-h-128 overflow-y-auto" : "max-h-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default ToggleDiv;
