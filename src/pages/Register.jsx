import React, { useState } from "react";

function RegistrationPage({ togglePopup }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    collegeName: "",
    city: "",
    fieldOfStudy: "",
    yearOfStudy: "",
    contactNumber: "",
    techInterests: "",
    volunteer: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log(formData);
  };

  return (
    <div className="bg-grad ">
      <div className="registration-container">
        <div className="registration-form">
          <form onSubmit={handleSubmit}>
            <h2>Registeration</h2>
            <div className="form-group">
              <label htmlFor="name">Full Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="collegeName">College Name:</label>
              <input
                type="text"
                id="collegeName"
                name="collegeName"
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="city">City:</label>
              <input
                type="text"
                id="city"
                name="city"
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="fieldOfStudy">Field of Study:</label>
              <input
                type="text"
                id="fieldOfStudy"
                name="fieldOfStudy"
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="yearOfStudy">Year of Study:</label>
              <input
                type="number"
                id="yearOfStudy"
                name="yearOfStudy"
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="contactNumber">Contact Number:</label>
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
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegistrationPage;
