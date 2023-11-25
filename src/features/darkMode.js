import { useState, useEffect } from 'react';

const DarkMode = () => {
  const storedDarkMode = localStorage.getItem('darkMode') === 'true';
  const [isDarkMode, setDarkMode] = useState(storedDarkMode);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkMode);
    localStorage.setItem('darkMode', isDarkMode.toString());
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  return { isDarkMode, toggleDarkMode };
};

export default DarkMode;
