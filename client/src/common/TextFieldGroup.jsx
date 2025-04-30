// import React from "react";
// import PropTypes from "prop-types";
// import classnames from "classnames";

// const TextFieldGroup = ({
//   name,
//   placeholder,
//   value,
//   label,
//   error,
//   info,
//   type,
//   onChange,
//   disabled,
// }) => {
//   return (
//     <div className="mb-4">
//       {label && (
//         <label htmlFor={name} className="block text-gray-600 font-medium mb-1">
//           {label}
//         </label>
//       )}
//       <input
//         type={type}
//         name={name}
//         placeholder={placeholder}
//         value={value}
//         onChange={onChange}
//         disabled={disabled}
//         className={classnames(
//           "w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2",
//           {
//             "border-red-500": error,
//             "border-gray-300": !error,
//           },
//           "focus:ring-purple-400"
//         )}
//       />
//       {info && <small className="text-gray-500">{info}</small>}
//       {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
//     </div>
//   );
// };

// TextFieldGroup.propTypes = {
//   name: PropTypes.string.isRequired,
//   placeholder: PropTypes.string,
//   value: PropTypes.string.isRequired,
//   label: PropTypes.string,
//   error: PropTypes.string,
//   info: PropTypes.string,
//   type: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
//   disabled: PropTypes.bool,
// };

// TextFieldGroup.defaultProps = {
//   type: "text",
// };

// export default TextFieldGroup;


import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { Eye, EyeOff } from "lucide-react"; // or use react-icons

const TextFieldGroup = ({
  name,
  placeholder,
  value,
  label,
  error,
  info,
  type,
  onChange,
  disabled,
  show,
  toggleShow,
}) => {
  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={name} className="block text-gray-600 font-medium mb-1">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          className={classnames(
            "w-full px-4 py-2 pr-10 border rounded-lg focus:outline-none focus:ring-2",
            {
              "border-red-500": error,
              "border-gray-300": !error,
            },
            "focus:ring-purple-400"
          )}
        />
        {toggleShow && (
          <button
            type="button"
            onClick={toggleShow}
            className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            {show ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        )}
      </div>
      {info && <small className="text-gray-500">{info}</small>}
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

TextFieldGroup.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  label: PropTypes.string,
  error: PropTypes.string,
  info: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  show: PropTypes.bool,
  toggleShow: PropTypes.func,
};

TextFieldGroup.defaultProps = {
  type: "text",
};

export default TextFieldGroup;
