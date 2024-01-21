import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../../firebase";

function LoginPage({ togglePopup }) {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevLoginData) => ({
      ...prevLoginData,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await auth.signInWithEmailAndPassword(loginData.email, loginData.password);
      setLoading(false);
      history.push('/'); // Redirect the user after login
      togglePopup(); // Close the modal if it's a popup
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <div className="bg-grad">
      <div className="registration-container">
        <div className="registration-form">
          {error && <div className="error-message">{error}</div>}
          <form onSubmit={handleLogin}>
            <h2>Login</h2>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" onChange={handleChange} />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" onChange={handleChange} />
            </div>

            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </button>
            <p>
                Don't have an account? <a href="/Register">Sign Up</a>
              </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
