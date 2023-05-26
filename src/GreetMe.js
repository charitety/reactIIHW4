import React, { useState } from "react";
import "./GreetMe.css";

// UI: Two input boxes and a button that says GREET ME
// Input: First Name and Last Name
// Output: Alert "Hello [first name][last name]!"

export const GreetMe = () => {
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");

  const handleName = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

  const handleGreeting = () => {
    console.log(`Hello ${firstName} ${lastName}!`);
    alert(`Hello ${firstName} ${lastName}!`);
  };

  return (
    <div>
      <input
        id="FirstName"
        type="text"
        placeholder="First name"
        value={firstName}
        onChange={handleName}
      />
      <br />
      <input
        id="LastName"
        type="text"
        placeholder="Last name"
        value={lastName}
        onChange={handleLastName}
      />
      <br/>
      <button id="Button" onClick={handleGreeting}>
        GREET ME
      </button>
    </div>
  );
};
