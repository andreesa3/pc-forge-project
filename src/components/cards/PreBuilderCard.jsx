import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import mockfile from "/mockfile.json";
import CarouselCard from "./CarouselCard";

const PreBuilderCard = () => {
  const [sortOrder, setSortOrder] = useState("asc");
  const gpu = mockfile.gpu;
  const cpu = mockfile.cpu;
  const mb = mockfile.motherboard;
  const ram = mockfile.motherboard;
  const navigate = useNavigate();

  

  return (
    <div className='componentCards' >
      <div>
        <CarouselCard text="PC 1" price="500" img="" />
      </div>
      <div>
        <CarouselCard text="PC 2 " price="500" img="" />
      </div>
      <div>
        <CarouselCard text="PC 3 " price="500" img="" />
      </div>
      <div>
        <CarouselCard text="PC 4 " price="500" img="" />
      </div>
      <div>
        <CarouselCard text="PC 5 " price="500" img="" />
      </div>
      <div>
        <CarouselCard text="PC 6 " price="500" img="" />
      </div>
    </div>
  );
};

export default PreBuilderCard;
