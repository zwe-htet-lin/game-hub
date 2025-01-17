import { useState } from "react";
import { Switch } from "../ui/Switch";

const ColorSwitchMode = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark', !darkMode);
  };

  return (
    <div className="flex justify-center items-center">
      <Switch onClick={toggleDarkMode} defaultChecked/>
      <span className="ml-2 whitespace-nowrap hidden md:block">Dark Mode</span>
    </div>
  )
}

export default ColorSwitchMode