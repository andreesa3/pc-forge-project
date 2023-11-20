import { useState } from 'react'
import mockData from '../mockfile.json'
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




function Builder() {
  const [selectedItems, setSelectedItems] = useState({
    cpu: null,
    gpu: null,
    motherboard: null,
    ram: null,
    power: null,
    ssd: null,
    cooler: null,
    case: null,
  });

  const handleSelectionChange = (itemName) => (event) => {
    const selectedItemName = event.target.value;
    const itemData = mockData[itemName].find((item) => item.id === parseInt(selectedItemName));
    setSelectedItems((prevSelectedItems) => ({
      ...prevSelectedItems,
      [itemName]: itemData,
    }));
  };

  return (
    <>
    <div className="builder-header">

      <h2><img src={logo} alt="logo" /><span className="purple">PC</span> Forge Builder</h2>
      <h3>Assembla il pc dei tuoi sogni con il builder di pc Forge <span className="builder-gradient">In Pc Forge creadiamo nella liberta dei nostri clienti di scegliere il compputer adatto alle proprie esigenze,
         ecco perche abbiamo creato questo tool per permettervi di scegliere al meglio </span>,
         se avete domande basta andare sulla sezione F.A.Q per trovare delle risposte , oppure potete cheidere al nostro asssitente in basso a destra . </h3>

    </div>

   
   <div className="builder">
        
       <SelectionWrapper imgSrc={cpu} options={mockData.cpu} onSelectChange={handleSelectionChange("cpu")} selectedData={selectedItems.cpu} name="cpu"/>
       <SelectionWrapper imgSrc={gpu} options={mockData.gpu} onSelectChange={handleSelectionChange("gpu")} selectedData={selectedItems.gpu} name="gpu"/>
       <SelectionWrapper imgSrc={ram} options={mockData.ram} onSelectChange={handleSelectionChange("ram")} selectedData={selectedItems.ram} name="ram"/>
       <SelectionWrapper imgSrc={motherboard} options={mockData.motherboard} onSelectChange={handleSelectionChange("motherboard")} selectedData={selectedItems.motherboard} name="mobo"/>
       <SelectionWrapper imgSrc={power} options={mockData.power} onSelectChange={handleSelectionChange("power")} selectedData={selectedItems.power} name="power"/>
       <SelectionWrapper imgSrc={ssd} options={mockData.ssd} onSelectChange={handleSelectionChange("ssd")} selectedData={selectedItems.ssd} name="ssd"/>
       <SelectionWrapper imgSrc={cooler} options={mockData.cooler} onSelectChange={handleSelectionChange("cooler")} selectedData={selectedItems.cooler} name="cooler"/>
       <SelectionWrapper imgSrc={cases} options={mockData.case} onSelectChange={handleSelectionChange("case")} selectedData={selectedItems.case} name="case"/>
   </div>
   <BubbleAssistant/>
    </>
    
  )
}

export default Builder
