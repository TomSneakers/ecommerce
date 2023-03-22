import React, { useState } from "react";

function RegistrationForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      `Submitting Registration Form with, Email: ${email}, Password: ${password}`
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={handleEmailChange} />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default RegistrationForm;
