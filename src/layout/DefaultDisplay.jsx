import { Outlet } from "react-router-dom"
import Footer from "../components/home-components/Footer";
import Navbar from "../components/home-components/Navbar";
import Sidebar from "../components/home-components/Sidebar";
import { useState, useEffect } from "react";

const DefaultDisplay = () => {
  const [hamburger, setHamburger] = useState(false);

  const handleHamburger = () => {
    setHamburger(h => !h);
  }

  const handleResize = () => {
    if (window.matchMedia('(min-width: 900px)').matches) {
      setHamburger(false);
    }
  };

  useEffect(() => {
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Navbar hamburger={hamburger} event={handleHamburger} />

      <Sidebar hamburger={hamburger} />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  )
}

export default DefaultDisplay;