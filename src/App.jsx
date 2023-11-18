import { Route, Routes } from "react-router-dom"
import DefaultDisplay from './layout/DefaultDisplay'
import Home from "./pages/Home"
import Products from "./pages/Products"
import Builder from "./pages/Builder"

const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<DefaultDisplay />}>
          <Route path="" element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="builder" element={<Builder/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
