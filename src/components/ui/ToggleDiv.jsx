import { useState } from "react";

const ToggleDiv = ({
  title,
  children,
  isTitle = false,
}) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleDiv = () => setIsExpanded(!isExpanded);

  return (
    <div
      className={`flex flex-col px-4 pt-2 rounded-md border-gray-200 dark:border-gray-700 border-2
 `}
    >
      <button onClick={toggleDiv}>
        <p
          className={`${
            isTitle
              ? "text-4xl font-medium mb-2 py-2"
              : "text-2xl font-medium pb-2 text-left text-indigo-400"
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
