import CpuCards from "../components/cards/CpuCards";
import GpuCards from "../components/cards/GpuCards";


const Products = () => {
  return (
    <div style={{display:"flex", flexDirection:"column", gap:"20px", marginTop:"100px"}}>
      <CpuCards/>
      <GpuCards/>
    </div>
  )
}

export default Products;