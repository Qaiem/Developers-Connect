// import React, { useState } from "react";
// import PropTypes from "prop-types";
// import { Link, useNavigate } from "react-router-dom";
// import { connect } from "react-redux";
// import { loginUser } from "../../src/actions/authActions"; // Import the loginUser action

// const Login = (props) => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     setLoading(true);

//     try {
//     const res = await props.loginUser({
//         email,
//         password,
//       });

//       alert("Login successful");
//       localStorage.setItem("token", res.data.token);
//       navigate("/");
//     } catch (error) {
//       const msg = error.message || "Login failed. Try again.";
//       alert(msg);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-100 to-purple-100 p-4 mt-1">
//       {" "}
//       {/* Added margin-top to push the form down */}
//       <div className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-md">
//         <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
//           Login
//         </h1>
//         <form noValidate className="space-y-4" onSubmit={handleLogin}>
//           <div>
//             <label className="block text-gray-600 font-medium mb-1">
//               Email
//             </label>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
//             />
//           </div>
//           <div>
//             <label className="block text-gray-600 font-medium mb-1">
//               Password
//             </label>
//             <div className="relative">
//               <input
//                 type={showPassword ? "text" : "password"}
//                 placeholder="Enter your password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg pr-10 focus:outline-none focus:ring-2 focus:ring-purple-400"
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-600"
//               >
//                 {showPassword ? (
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-5 w-5"
//                     viewBox="0 0 20 20"
//                     fill="currentColor"
//                   >
//                     <path d="M4.293 4.293a1 1 0 011.414 0l10 10a1 1 0 01-1.414 1.414l-1.868-1.868A7.018 7.018 0 0110 17c-4.418 0-8-4-8-7s3.582-7 8-7a7.018 7.018 0 015.586 2.879l1.121-1.121a1 1 0 111.415 1.414l-16 16a1 1 0 01-1.414-1.414L4.293 4.293zM10 5c-3.314 0-6 2.686-6 5s2.686 5 6 5a5.984 5.984 0 004.472-2.035l-1.414-1.414A4.001 4.001 0 0110 13a4 4 0 010-8z" />
//                   </svg>
//                 ) : (
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-5 w-5"
//                     viewBox="0 0 20 20"
//                     fill="currentColor"
//                   >
//                     <path d="M10 3c-4.418 0-8 4-8 7s3.582 7 8 7 8-4 8-7-3.582-7-8-7zm0 12c-2.761 0-5-2.239-5-5s2.239-5 5-5 5 2.239 5 5-2.239 5-5 5z" />
//                     <path d="M10 8a2 2 0 100 4 2 2 0 000-4z" />
//                   </svg>
//                 )}
//               </button>
//             </div>
//           </div>
//           <button
//             type="submit"
//             disabled={loading}
//             className={`w-full bg-blue-600 text-white py-2 rounded-lg transition ${
//               loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
//             }`}
//           >
//             {loading ? "Logging in..." : "Login"}
//           </button>
//         </form>
//         <div className="text-center text-sm text-gray-500 mt-4">
//           Don't have an account?{" "}
//           <Link
//             to="/signup"
//             className="text-blue-600 cursor-pointer hover:underline"
//           >
//             Register
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// Login.propTypes = {
//   loginUser: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired,
//   errors: PropTypes.object.isRequired,
// };

// const mapStateToProps = (state) => ({
//   auth: state.auth,
//   errors: state.errors,
// });

// export default connect(mapStateToProps, { loginUser })(Login);

import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { loginUser } from "../../src/actions/authActions"; // Import the loginUser action

const Login = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({}); // Local state for errors
  const navigate = useNavigate();

  // Extract errors from Redux props
  // const { errors } = props;

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrors({}); // Reset errors on form submission
    setLoading(true);

    try {
      const res = await props.loginUser({
        email,
        password,
      });

      alert("Login successful");
      localStorage.setItem("token", res.data.token);
      navigate("/");
    } catch (err) {
      // const msg = error.message || "Login failed. Try again.";
      // alert(msg);
      setErrors(err)
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-100 to-purple-100 p-4 mt-1">
      <div className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Login
        </h1>
        <form noValidate className="space-y-4" onSubmit={handleLogin}>
          {/* Email input */}
          <div>
            <label className="block text-gray-600 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.email ? "border-red-500" : "border-gray-300"
              } focus:ring-purple-400`}
            />
            {/* Display email error */}
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Password input */}
          <div>
            <label className="block text-gray-600 font-medium mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className={`w-full px-4 py-2 border rounded-lg pr-10 focus:outline-none focus:ring-2 ${
                  errors.password ? "border-red-500" : "border-gray-300"
                } focus:ring-purple-400`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-600"
              >
                {showPassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M4.293 4.293a1 1 0 011.414 0l10 10a1 1 0 01-1.414 1.414l-1.868-1.868A7.018 7.018 0 0110 17c-4.418 0-8-4-8-7s3.582-7 8-7a7.018 7.018 0 015.586 2.879l1.121-1.121a1 1 0 111.415 1.414l-16 16a1 1 0 01-1.414-1.414L4.293 4.293zM10 5c-3.314 0-6 2.686-6 5s2.686 5 6 5a5.984 5.984 0 004.472-2.035l-1.414-1.414A4.001 4.001 0 0110 13a4 4 0 010-8z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10 3c-4.418 0-8 4-8 7s3.582 7 8 7 8-4 8-7-3.582-7-8-7zm0 12c-2.761 0-5-2.239-5-5s2.239-5 5-5 5 2.239 5 5-2.239 5-5 5z" />
                    <path d="M10 8a2 2 0 100 4 2 2 0 000-4z" />
                  </svg>
                )}
              </button>
            </div>
            {/* Display password error */}
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-blue-600 text-white py-2 rounded-lg transition ${
              loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
            }`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        <div className="text-center text-sm text-gray-500 mt-4">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-blue-600 cursor-pointer hover:underline"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { loginUser })(Login);
