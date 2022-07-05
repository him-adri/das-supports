import React from "react";

const Header = ({ handleToggleDarkMode }) => {
  return (
    <div className="header">
      <h1>
        <span style={{ color: "#308d46" }}>Himadri's</span> Note
      </h1>
      {/*this is our toggle button 
        using this button we can change the background theme for our application*/}
      <button
        onClick={() =>
          handleToggleDarkMode((previousDarkMode) => !previousDarkMode)
        }
        className="save"
      >
        Dark Mode
      </button>
    </div>
  );
};

export default Header;
