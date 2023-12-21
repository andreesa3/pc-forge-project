import { useState } from 'react'
import mockData from '/mockfile.json';
import cpu from "../assets/icons/cpu.webp"
import power from "../assets/icons/power.webp"
import gpu from "../assets/icons/gpu.webp"
import cases from "../assets/icons/case.webp"
import motherboard from "../assets/icons/motherboard.webp"
import ssd from "../assets/icons/ssd.webp"
import ram from "../assets/icons/ram.webp"
import cooler from "../assets/icons/cooler.webp"
import SelectionWrapper from '../components/builder/SelectionWrapper'
import BubbleAssistant from '../components/builder/bubbleAssistant'
import logo from '../assets/icons/logo.svg'
import Button from "../components/home-components/Button";
import { useEffect } from 'react';




function Builder() {
  const [selectedItems, setSelectedItems] = useState({
    cpu: null,
    gpu: null,
    motherboard: null,
    ram: null,
    power: null,
    ssd: null,
    cooler: null,
    tower: null,
  });
  const [showIncompatiblePopup, setShowIncompatiblePopup] = useState(false);
 
  useEffect(() => {
    setShowIncompatiblePopup(false);
  }, [selectedItems.motherboard && selectedItems.motherboard.details.socket]);
  

  const handleSelectionChange = (itemName) => (event) => {
    const selectedItemName = event.target.value;
    const itemData = mockData[itemName].find((item) => item.id === parseInt(selectedItemName));

    if (itemName === 'cpu') {
      const selectedMotherboard = selectedItems.motherboard; 
      
      if (selectedMotherboard && !isCompatibleCpu(itemData, selectedMotherboard)) {
        console.log(selectedMotherboard.details.socket,);
        setShowIncompatiblePopup(true);
        return; 
        
      }
    }
   
    if (itemName === 'ram') {
      const selectedMotherboard = selectedItems.motherboard;

      if (selectedMotherboard && !isCompatibleRam(itemData, selectedMotherboard)) {
        setShowIncompatiblePopup(true);
        return;
      }
    }
/*  if (itemName === 'power') {
    const selectedCpu = selectedItems.cpu;
    const selectedGpu = selectedItems.gpu;
    const selectedMotherboard = selectedItems.motherboard;

    if (selectedCpu && selectedGpu && selectedMotherboard && !isCompatiblePower(itemData, selectedGpu, selectedMotherboard, selectedCpu)) {
      setShowIncompatiblePopup(true);
      return;
    }
  } */
   


    setSelectedItems((prevSelectedItems) => ({
      ...prevSelectedItems,
      [itemName]: itemData,
    }));
  };

  const isCompatibleCpu = (cpu, motherboard) => {
    return cpu.socket === motherboard.details.socket 
  };
  const isCompatibleRam = (ram, motherboard) => {
    return ram.details.memoryType === motherboard.details.supported_memory;
  };
  

/*   const isCompatiblePower= (power,gpu,motherboard,cpu)=>{
    const powerTotal = cpu.details.power+gpu.details.power+motherboard.details.price+150
    return power.wattage > powerTotal
  } */

  const totalPrice=()=>{
    const cpuPrice = selectedItems.cpu ? selectedItems.cpu.price : 0;
    const gpuPrice = selectedItems.gpu ? selectedItems.gpu.price : 0;
    const motherboardPrice = selectedItems.motherboard ? selectedItems.motherboard.price : 0;
    const ramPrice = selectedItems.ram ? selectedItems.ram.price : 0;
    const powerPrice = selectedItems.power ? selectedItems.power.price : 0;
    const ssdPrice = selectedItems.ssd ? selectedItems.ssd.price : 0;
    const coolerPrice = selectedItems.cooler ? selectedItems.cooler.price : 0;
    const towerPrice = selectedItems.tower ? selectedItems.tower.price : 0;
    

    const total = cpuPrice +gpuPrice+motherboardPrice+ramPrice+powerPrice+ssdPrice+coolerPrice+towerPrice;

    console.log(total)
    return total;
  }


  return (
    <section>
    <div className="builder-header wrapper">

      <h2><img src={logo} alt="logo" /><span className="purple">PC</span> Forge Builder</h2>
      <span  className="builder-intro ">Assembla il pc dei tuoi sogni con il builder di pc Forge In Pc Forge creadiamo nella liberta dei nostri clienti di scegliere il compputer adatto alle proprie esigenze,
         ecco perche abbiamo creato questo tool per permettervi di scegliere al meglio,
         se avete domande basta andare sulla sezione F.A.Q per trovare delle risposte , oppure potete cheidere al nostro asssitente in basso a destra .</span>


   
   <div className="builder wrapper">  
       <SelectionWrapper imgSrc={motherboard} options={mockData.motherboard} onSelectChange={handleSelectionChange("motherboard")} selectedData={selectedItems.motherboard} data ={selectedItems.motherboard} type="motherboard" label="cpu" />
       <SelectionWrapper imgSrc={cpu} options={mockData.cpu} onSelectChange={handleSelectionChange("cpu")} selectedData={selectedItems.cpu} data ={selectedItems.cpu} type="cpu" name="cpu"/>
       <SelectionWrapper imgSrc={gpu} options={mockData.gpu} onSelectChange={handleSelectionChange("gpu")} selectedData={selectedItems.gpu} data ={selectedItems.gpu} type="gpu" name="gpu"/>
       <SelectionWrapper imgSrc={ram} options={mockData.ram} onSelectChange={handleSelectionChange("ram")} selectedData={selectedItems.ram} data ={selectedItems.ram} type="ram" name="ram"/>
       <SelectionWrapper imgSrc={power} options={mockData.power} onSelectChange={handleSelectionChange("power")} selectedData={selectedItems.power} data ={selectedItems.power} type="power" name="power"/>
       <SelectionWrapper imgSrc={ssd} options={mockData.ssd} onSelectChange={handleSelectionChange("ssd")} selectedData={selectedItems.ssd} data ={selectedItems.ssd} type="ssd" name="ssd"/>
       <SelectionWrapper imgSrc={cooler} options={mockData.cooler} onSelectChange={handleSelectionChange("cooler")} selectedData={selectedItems.cooler} data ={selectedItems.cooler} type="cooler" name="cooler"/>
       <SelectionWrapper imgSrc={cases} options={mockData.tower} onSelectChange={handleSelectionChange("tower")} selectedData={selectedItems.tower} data ={selectedItems.tower} type="tower" name="case" />
       <p className='builder-price'>Totale: {totalPrice()} €</p>
       {showIncompatiblePopup === true && (
        <div className="incompatibility-popup">
          <p>Error: Selected CPU is not compatible with the motherboard.</p>
          <button onClick={() => setShowIncompatiblePopup(false)}>Close</button>
        </div>
      )}
   </div>
   <div style={{display:"flex", flexDirection:"row", gap:"15px", alignSelf:"flex-start", marginTop:"20px"}}>
  </div>
    <Button text="Compra ora" className="builder-btn" theme="dark" />
  <Button text="Aggiungi al carrello" className="builder-btn" theme="light" />
   <BubbleAssistant/>
    </div>
    </section>
    
  )
}

export default Builder
