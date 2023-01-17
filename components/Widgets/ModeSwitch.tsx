import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { BsFillSunFill, BsMoonStarsFill } from "react-icons/bs";

const ModeSwitch = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currTheme = theme === "system" ? systemTheme : theme;

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const renderIcon = () => {
    if (currTheme === "dark") {
      return <BsFillSunFill />;
    } else {
      return <BsMoonStarsFill />;
    }
  };

  return (
    <button className="p-4 rounded-lg switcher" onClick={() => setTheme(currTheme === "dark" ? "light" : "dark")}>
      {renderIcon()}
    </button>
  );
};

export default ModeSwitch;
