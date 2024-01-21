import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import database, { auth } from "../../firebase";

function RegistrationPage({ togglePopup }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    collegeName: "",
    city: "",
    fieldOfStudy: "",
    contactNumber: "",
    volunteer: false,
  });
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  // Fetch the current user from Firebase Auth
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return unsubscribe; // Cleanup subscription
  }, []);

  const goBack = () => {
    history.push("/");
  };
  const logout = () => {
    auth.signOut();
    history.push("/");
  };

  if (currentUser) {
    // User is already logged in, show a message instead of the registration form
    return (
      <div className="bg-grad ">
        <div className="registration-container">
          <div className="registration-form">
            <h2>Welcome Back!</h2>
            <p>You are already registered and logged in.</p>
            <button onClick={goBack} className="submit-btn">
              Go Home
            </button>
            <button onClick={logout} className="submit-btn">
              Logout
            </button>
          </div>
        </div>
      </div>
    );
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password, ...profileData } = formData; // Destructure the email and password from formData for auth, rest is profileData

    try {
      // Create the user with Firebase Authentication
      const userCredential = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      const user = userCredential.user;

      // Save the additional user profile data in Firestore
      await database.collection("users").doc(user.uid).set(profileData);

      alert("Successfully registered!"); // Show success message
      history.push("/"); // Redirect the user to the home page or wherever you want
    } catch (error) {
      console.error("Error during the registration: ", error);
      alert("Failed to register. Please try again."); // Show error message
    }
  };

  return (
    <div className="bg-grad ">
      <div className="registration-container">
        <div className="registration-form">
          <form onSubmit={handleSubmit}>
            <h2>Registeration</h2>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="collegeName">College Name</label>
              <input
                type="text"
                id="collegeName"
                name="collegeName"
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                name="city"
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="fieldOfStudy">Field of Study</label>
              <input
                type="text"
                id="fieldOfStudy"
                name="fieldOfStudy"
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="contactNumber">Contact Number</label>
              <input
                type="tel"
                id="contactNumber"
                name="contactNumber"
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="submit-btn">
              Submit
            </button>
            <div className="form-group">
              <p>
                Already have an account? <a href="/Login">Login</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegistrationPage;
