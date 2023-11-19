import { Route, Routes } from "react-router-dom"
import DefaultDisplay from './layout/DefaultDisplay'
import Home from "./pages/Home"
import Products from "./pages/Products"
import CpuDetail from "./pages/CpuDetail"
import GpuDetail from "./pages/GpuDetail"
import CpuCards from "./components/cards/CpuCards"
import PreBuilderCard from "./components/cards/PreBuilderCard"
import GpuCards from "./components/cards/GpuCards"
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
          </Route>
      </Routes>
    </>
  )
}

export default App
