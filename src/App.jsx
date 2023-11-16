import { Route, Routes } from "react-router-dom"
import DefaultDisplay from './layout/DefaultDisplay'
import Home from "./pages/Home"
import Products from "./pages/Products"
import CpuDetail from "./pages/CpuDetail"
import GpuDetail from "./pages/GpuDetail"

const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<DefaultDisplay />}>
          <Route path="" element={<Home />} />
          <Route path="products" element={<Products />} />
         <Route path="product/cpu/:id" element={<CpuDetail />} />
         <Route path="product/gpu/:id" element={<GpuDetail />} />

        </Route>
      </Routes>
    </>
  )
}

export default App
