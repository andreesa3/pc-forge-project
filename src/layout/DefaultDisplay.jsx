import { Outlet } from "react-router-dom"
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const DefaultDisplay = () => {
  return (
    <>
      <Navbar />

      <main>
        <div className="wrapper">
          <Outlet />
        </div>
      </main>

      <Footer />
    </>
  )
}

export default DefaultDisplay;