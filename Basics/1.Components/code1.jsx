// App.js
import React from "react";
import Header from "./Header";

function App() {
  return (
    <div>
      <Header />
      <p>Welcome to React!</p>
    </div>
  );
}

// Header.js
import React from "react";

function Header() {
  return <h1>This is a Header Component</h1>;
}

export default Header;
