import { Route, Routes } from "react-router-dom";
import DefaultDisplay from "./layout/DefaultDisplay";
import Home from "./pages/Home";
import Products from "./pages/Products";
import CpuDetail from "./pages/CpuDetail";
import GpuDetail from "./pages/GpuDetail";
import CpuCards from "./components/cards/CpuCards";
import PreBuilderCard from "./components/cards/PreBuilderCard";
import GpuCards from "./components/cards/GpuCards";
import SsdDetail from "./pages/SsdDetail";
import SsdCards from "./components/cards/SsdCards";
import CaseCards from "./components/cards/CaseCards";
import CaseDetail from "./pages/CaseDetail";
import CoolerCards from "./components/cards/CoolerCards";
import CoolerDetail from "./pages/CoolerDetail";
import PrebuildDetail from "./pages/PrebuildDetail";
import Contact from "./components/home-components/Contact";
import MotherboardCards from "./components/cards/MotherboardCards";
import MotherBoardDetail from "./pages/MotherBoardDetail";
import RamCards from "./components/cards/RamCards";
import RamDetail from "./pages/RamDetail";
import PowerCards from "./components/cards/PowerCards";
import PowerDetail from "./pages/PowerDetail";
import Builder from "./pages/Builder";
import useDarkMode from "./features/darkmode";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { useState } from "react";
import ThanksForBuy from "./pages/ThanksForBuy";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const { appClassName } = useDarkMode();

  document.body.className = appClassName;

  return (
    
    <div className={appClassName}>
      
      <Routes>
        <Route path="/" element={<DefaultDisplay isLoggedIn={isLoggedIn}/>}>

          <Route path="" element={<Home />} />

          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />

          <Route path="thanksForBuy" element={<ThanksForBuy />} />
          <Route path="prebuilder" element={<PreBuilderCard />} />
          <Route path="products/creator" element={<PreBuilderCard />} />
          <Route path="products/innovator" element={<PreBuilderCard />} />
          <Route path="products/forgemaster" element={<PreBuilderCard />} />
          <Route path="prebuilder/:id" element={<PrebuildDetail />} />
          <Route path="products" element={<Products />} />
          <Route path="products/cpu" element={<CpuCards />} />
          <Route path="product/cpu/:id" element={<CpuDetail />} />
          <Route path="products/gpu" element={<GpuCards />} />
          <Route path="product/gpu/:id" element={<GpuDetail />} />
          <Route path="products/ssd" element={<SsdCards />} />
          <Route path="product/ssd/:id" element={<SsdDetail />} />
          <Route path="products/case" element={<CaseCards />} />
          <Route path="product/case/:id" element={<CaseDetail />} />
          <Route path="products/cooler" element={<CoolerCards />} />
          <Route path="product/cooler/:id" element={<CoolerDetail />} />
          <Route path="products/mb" element={<MotherboardCards />} />
          <Route path="product/mb/:id" element={<MotherBoardDetail />} />
          <Route path="products/ram" element={<RamCards />} />
          <Route path="product/ram/:id" element={<RamDetail />} />
          <Route path="products/power" element={<PowerCards />} />
          <Route path="product/power/:id" element={<PowerDetail />} />
          <Route path="contact" element={<Contact />} />
          <Route path="builder" element={<Builder />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
