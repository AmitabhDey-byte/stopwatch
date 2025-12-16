import React, { useState, useEffect } from "react";
import "./ToggleDark.css";

const ToggleDark = () => {
  const [isDark, setIsDark] = useState(false); // default: light mode

  useEffect(() => {
    const root = document.documentElement;

    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <button onClick={() => setIsDark(prev => !prev)} className="toggle-btn">
      {isDark ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
  );
};

export default ToggleDark;

