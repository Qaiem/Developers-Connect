// import React, { useState } from "react";
// import { Link,useNavigate } from "react-router-dom";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
// import { registerUser } from "../../actions/authActions";
// import TextFieldGroup from "../../common/TextFieldGroup";

// const Register = (props) => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [password2, setPassword2] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [showPassword2, setShowPassword2] = useState(false);
//   const [message, setMessage] = useState(null);
//   const [error, setError] = useState({});
//   const navigate = useNavigate();


//   const handleRegister = async (e) => {
//     e.preventDefault();
//     setMessage(null);
//     setError({});
  
//     if (password !== password2) {
//       setError({ password2: "Passwords do not match" });
//       return;
//     }
  
//     const newUser = {
//       name,
//       email,
//       password,
//       password2
//     };
  
//     try {
//       await props.registerUser(newUser);
//       setMessage("Registration successful!");
//       setEmail("");
//       setName("");
//       setPassword("");
//       setPassword2("");
//       setTimeout(() => {
//       navigate("/login");
//       }, 2000); // Redirect to login page after 2 seconds
//        // Redirect to login page after successful registration
//       // clear fields...
//     } catch (err) {
//       setError(err); // Now err will be an object like { email: "Invalid", ... }
//     }
    
//   };
  
//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-100 to-blue-100 p-4 mt-1">
      
//       <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-sm">
//         <h1 className="text-3xl font-bold text-center text-blue-700 mb-2">
//           Register
//         </h1>

//         {message && (
//           <p className="text-green-600 text-center mb-1">{message}</p>
//         )}
//         {error.general && (
//           <p className="text-red-600 text-center mb-2">{error.general}</p>
//         )}

//         <form noValidate className="space-y-2" onSubmit={handleRegister}>
//           <TextFieldGroup
//             placeholder="Enter your full name"
//             label="Full Name"
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             error={error.name}
//           />
//           <TextFieldGroup
//             placeholder="Enter your email"
//             label="Email"
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             error={error.email}
//             info='Want Profile image? Use Gravatar email'
//           />
//           <TextFieldGroup 
//               placeholder="Enter your password"
//               label="Password"
//               type={showPassword ? "text" : "password"}
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               error={error.password}
//               show={showPassword}
//               toggleShow={() => setShowPassword(!showPassword)}
//             />
//           <TextFieldGroup 
//               placeholder="Confirm your password"
//               label="Confirm Password"
//               type={showPassword2 ? "text" : "password"}
//               value={password2}
//               onChange={(e) => setPassword2(e.target.value)}
//               error={error.password2}
//               show={showPassword2}
//               toggleShow={() => setShowPassword2(!showPassword2)}
//             />
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
//           >
//             Submit
//           </button>
//         </form>

//         <Link
//           to="/login"
//           className="text-center text-sm text-gray-600 mt-2 block"
//         >
//           Already have an account?{" "}
//           <span className="text-blue-600 hover:underline">Login</span>
//         </Link>
//       </div>
//     </div>
//   );
// };

// Register.propTypes = {
//   registerUser: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired,
//   errors: PropTypes.object.isRequired,
// };

// const mapStateToProps = (state) => ({
//   auth: state.auth,
//   errors: state.errors,
// });

// export default connect(mapStateToProps, {registerUser})(Register);


import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import TextFieldGroup from "../../common/TextFieldGroup";

const Register = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState({});
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setMessage(null);
    setError({});

    if (password !== password2) {
      setError({ password2: "Passwords do not match" });
      return;
    }

    const newUser = {
      name,
      email,
      password,
      password2,
    };

    try {
      await props.registerUser(newUser);
      setMessage("Registration successful!");
      setEmail("");
      setName("");
      setPassword("");
      setPassword2("");
      setTimeout(() => {
        navigate("/login");
      }, 2000); // Redirect to login page after 2 seconds
    } catch (err) {
      setError(err); // Now err will be an object like { email: "Invalid", ... }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh] bg-gradient-to-r from-purple-200 to-blue-200 px-4 py-6 sm:px-6 sm:py-10">
      <div className="bg-white p-5 sm:p-6 rounded-xl shadow-lg w-full max-w-sm sm:max-w-md">
        <h1 className="text-2xl font-bold text-center text-blue-700 mb-1">Register</h1>

        {message && (
          <p className="text-green-600 text-center mb-1">{message}</p>
        )}
        {error.general && (
          <p className="text-red-600 text-center mb-0.2">{error.general}</p>
        )}

        <form noValidate className="space-y-0.5" onSubmit={handleRegister}>
          <TextFieldGroup
            placeholder="Enter your full name"
            label="Full Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={error.name}
          />
          <TextFieldGroup
            placeholder="Enter your email"
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={error.email}
            info="Want a profile image? Use your Gravatar email"
          />
          <TextFieldGroup
            placeholder="Enter your password"
            label="Password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={error.password}
            show={showPassword}
            toggleShow={() => setShowPassword(!showPassword)}
          />
          <TextFieldGroup
            placeholder="Confirm your password"
            label="Confirm Password"
            type={showPassword2 ? "text" : "password"}
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
            error={error.password2}
            show={showPassword2}
            toggleShow={() => setShowPassword2(!showPassword2)}
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white text-sm sm:text-base py-2 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out"
          >
            Submit
          </button>
        </form>

        <Link
          to="/login"
          className="text-center text-sm text-gray-600 mt-4 block"
        >
          Already have an account?{" "}
          <span className="text-blue-600 hover:underline">Login</span>
        </Link>
      </div>
    </div>
  );
};

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { registerUser })(Register);
