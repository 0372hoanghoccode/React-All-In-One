import React from "react";
import useToggle from "../hooks/useToggle";

function ToggleComponent() {
  const [isToggled, toggle] = useToggle();

  return (
    <div>
      <p>{isToggled ? "On!" : "Off!"}</p>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
}

export default ToggleComponent;
