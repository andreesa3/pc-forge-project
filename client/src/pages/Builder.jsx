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
 
/*   useEffect(() => {
    console.log("call use effect")
    setShowIncompatiblePopup(false);
  }, [selectedItems.motherboard , selectedItems.motherboard.details.socket,selectedItems.cpu ]);
   */

  const handleSelectionChange = (itemName) => (event) => {
    setShowIncompatiblePopup(false);
    const selectedItemName = event.target.value;
    const itemData = mockData[itemName].find((item) => item.id === parseInt(selectedItemName));

    if (itemName === 'cpu') {
      const selectedMotherboard = selectedItems.motherboard; 
      
      if (selectedMotherboard && !isCompatibleCpu(itemData, selectedMotherboard)) {
        setShowIncompatiblePopup(true);
      }
    }


    setSelectedItems((prevSelectedItems) => ({
      ...prevSelectedItems,
      [itemName]: itemData,
    }));
  };

  const isCompatibleCpu = (cpu, motherboard) => {
    return cpu.socket === motherboard.details.socket;
  };


  return (
    <section>
    <div className="builder-header wrapper">

      <h2><img src={logo} alt="logo" /><span className="purple">PC</span> Forge Builder</h2>
      <h3>Assembla il pc dei tuoi sogni con il builder di pc Forge <span className="builder-gradient">In Pc Forge creadiamo nella liberta dei nostri clienti di scegliere il compputer adatto alle proprie esigenze,
         ecco perche abbiamo creato questo tool per permettervi di scegliere al meglio </span>,
         se avete domande basta andare sulla sezione F.A.Q per trovare delle risposte , oppure potete cheidere al nostro asssitente in basso a destra . </h3>


   
   <div className="builder wrapper">  
       <SelectionWrapper imgSrc={motherboard} options={mockData.motherboard} onSelectChange={handleSelectionChange("motherboard")} selectedData={selectedItems.motherboard} data ={selectedItems.motherboard} type="motherboard" label="cpu" name="cpu"/>
       <SelectionWrapper imgSrc={cpu} options={mockData.cpu} onSelectChange={handleSelectionChange("cpu")} selectedData={selectedItems.cpu} data ={selectedItems.cpu} type="cpu" name="cpu"/>
       <SelectionWrapper imgSrc={gpu} options={mockData.gpu} onSelectChange={handleSelectionChange("gpu")} selectedData={selectedItems.gpu} data ={selectedItems.gpu} type="gpu" name="gpu"/>
       <SelectionWrapper imgSrc={ram} options={mockData.ram} onSelectChange={handleSelectionChange("ram")} selectedData={selectedItems.ram} data ={selectedItems.ram} type="ram" name="ram"/>
       <SelectionWrapper imgSrc={power} options={mockData.power} onSelectChange={handleSelectionChange("power")} selectedData={selectedItems.power} data ={selectedItems.power} type="power" name="power"/>
       <SelectionWrapper imgSrc={ssd} options={mockData.ssd} onSelectChange={handleSelectionChange("ssd")} selectedData={selectedItems.ssd} data ={selectedItems.ssd} type="ssd" name="ssd"/>
       <SelectionWrapper imgSrc={cooler} options={mockData.cooler} onSelectChange={handleSelectionChange("cooler")} selectedData={selectedItems.cooler} data ={selectedItems.cooler} type="cooler" name="cooler"/>
       <SelectionWrapper imgSrc={cases} options={mockData.tower} onSelectChange={handleSelectionChange("tower")} selectedData={selectedItems.tower} data ={selectedItems.tower} type="tower" name="case" />
       {showIncompatiblePopup  && (
        <div className="incompatibility-popup">
          <p>Error: Selected CPU is not compatible with the motherboard.</p>
          <button onClick={() => setShowIncompatiblePopup(false)}>Close</button>
        </div>
      )}
   </div>
   <div style={{display:"flex", flexDirection:"row", gap:"15px", alignSelf:"flex-start", marginTop:"15px"}}>
    <Button text="Compra ora" className="builder-btn" theme="dark" />
  <Button text="Aggiungi al carrello" className="builder-btn" theme="light" />
  </div>
   <BubbleAssistant/>
    </div>
    </section>
    
  )
}

export default Builder
