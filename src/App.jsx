import { Route, Routes } from "react-router-dom"
import DefaultDisplay from './layout/DefaultDisplay'
import Home from "./pages/Home"
import Products from "./pages/Products"
import CpuDetail from "./pages/CpuDetail"
import GpuDetail from "./pages/GpuDetail"
import CpuCards from "./components/cards/CpuCards"
import PreBuilderCard from "./components/cards/PreBuilderCard"
import GpuCards from "./components/cards/GpuCards"
import SsdDetail from "./pages/SsdDetail"
import SsdCards from "./components/cards/SsdCards"
import CaseCards from "./components/cards/CaseCards"
import CaseDetail from "./pages/CaseDetail"
import CoolerCards from "./components/cards/CoolerCards"
import CoolerDetail from "./pages/CoolerDetail"




const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<DefaultDisplay />}>
          <Route path="" element={<Home />} />
          <Route path="prebuilder" element={<PreBuilderCard/>} />
          <Route path="products" element={<Products />} />
          <Route path="products/cpu" element={<CpuCards/> } />
         <Route path="product/cpu/:id" element={<CpuDetail />} />
         <Route path="products/gpu" element={<GpuCards />} />
         <Route path="product/gpu/:id" element={<GpuDetail />} />
         <Route path="products/ssd" element={<SsdCards />} />
         <Route path="product/ssd/:id" element={<SsdDetail />} />
         <Route path="products/case" element={<CaseCards />} />
         <Route path="product/case/:id" element={<CaseDetail />} />
         <Route path="products/cooler" element={<CoolerCards />} />
         <Route path="product/cooler/:id" element={<CoolerDetail/>} />
          </Route>
      </Routes>
    </>
  )
}

export default App
