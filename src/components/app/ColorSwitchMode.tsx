import { useState } from "react";
import { AiOutlineSun } from "react-icons/ai";
import { FiMoon } from "react-icons/fi";
import { Button } from "../ui/button";

const ColorSwitchMode = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark", !darkMode);
  };

  return (
    <div className="flex justify-center items-center">
      <Button
        variant="ghost"
        size="icon"
        className="[&_svg]:size-5"
        onClick={toggleDarkMode}
      >
        {darkMode ? <AiOutlineSun /> : <FiMoon />}
      </Button>
    </div>
  );
};

export default ColorSwitchMode;
