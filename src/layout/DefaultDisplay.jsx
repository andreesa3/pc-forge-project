import { Outlet } from "react-router-dom"
import Footer from "../components/home-components/Footer";
import Navbar from "../components/home-components/Navbar";
import Sidebar from "../components/home-components/Sidebar";
import { useState } from "react";

const DefaultDisplay = () => {
  const [hamburger, setHamburger] = useState(false);

  const handleHamburger = () => {
    setHamburger(h => !h);
  }

  return (
    <>
      <Navbar hamburger={hamburger} event={handleHamburger}/>

      <Sidebar hamburger={hamburger} />

      <main className="center-wrapper">
        <div className="wrapper">
          <Outlet />
        </div>
      </main>

      <Footer />
    </>
  )
}

export default DefaultDisplay;