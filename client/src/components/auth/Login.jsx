import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions"; // Import the loginUser action
import TextFieldGroup from "../../common/TextFieldGroup";

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
      await props.loginUser({
        email,
        password,
      });

      alert("Login successful");
      // localStorage.setItem("token", res.data.token);
      navigate("/dashboard"); // Redirect to dashboard after successful login
    } catch (err) {
      setErrors(err);
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
          <TextFieldGroup
            placeholder="Enter your email"
            name="email"
            value={email}
            label="Email"
            error={errors.email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required={true}
          />

          {/* Password input */}
          <TextFieldGroup
            placeholder="Enter your password"
            label="Password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={errors.password}
            show={showPassword}
            toggleShow={() => setShowPassword(!showPassword)}
          />
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
