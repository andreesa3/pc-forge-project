import { useState, useEffect } from 'react';

const DarkMode = () => {
  const storedDarkMode = localStorage.getItem('darkMode') === 'true';
  const [isDarkMode, setDarkMode] = useState(storedDarkMode);
  
  useEffect(() => {
    localStorage.setItem('darkMode', isDarkMode.toString());
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  const appClassName = isDarkMode ? 'dark-mode' : '';

  return { appClassName, isDarkMode, toggleDarkMode };
};

export default DarkMode;
