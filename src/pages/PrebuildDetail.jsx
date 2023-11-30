import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import mockfile from "/mockfile.json";
import Button from "../components/home-components/Button";
import InfoPcBuilder from "../components/InfoPcBuilder";

//image
import imgPc1 from "/src/assets/images/CreatorDetail.png"

const PrebuildDetail = () => {
  const { id } = useParams();
  const preBuilder = mockfile.prebuilder.find(
    (preBuilder) => preBuilder.id === parseInt(id, 10)
  );

 
  const navigate = useNavigate();

  if (!preBuilder) {
    return <div>Prodotto non trovato</div>;
  }

  const prevPage = () => {
    navigate(-1);
  };

  return (
    <section>
      <div
        className="wrapper"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          alignItems: "center",
        }}
      >
        <div className="boxDetails ">
          <button className="prevPageProducts" onClick={prevPage}>
            <img
              className="imgButtonPrev"
              src="https://cdn0.iconfinder.com/data/icons/controls-add-on/48/v-38-512.png"
              alt=""
            />
          </button>
          <img className="imageComponent" src={preBuilder.img} alt="" />
          <div className="detailsComponent">
            <span className="typeComponent">PREASSEMBLATI</span>
            <h2 className="nameComponent">{preBuilder.name}</h2>
            <p className="descriptionComponent">
            {/* <span className="titleComponent">DESCRIZIONE:</span>{" "} */}
            </p>
            <p className="infoCompontent"><span className="titleComponent">SOCKET:</span> {preBuilder.socket}</p>
            <p className="infoCompontent"><span className="titleComponent">CPU:</span> {preBuilder.cpu}</p>
            <p className="infoCompontent"><span className="titleComponent">GPU:</span> {preBuilder.gpu}</p>
            <p className="infoCompontent"><span className="titleComponent">CASE:</span> {preBuilder.case}</p>
            <p className="infoCompontent"><span className="titleComponent">POWER:</span> {preBuilder.power}</p>
            <p className="infoCompontent"><span className="titleComponent">SSD:</span> {preBuilder.ssd}</p>
            <p className="infoCompontent"><span className="titleComponent">RAM:</span> {preBuilder.ram}</p>
            <p className="infoCompontent">
            <span className="titleComponent">MOTHERBOARD:</span> {preBuilder.motherboard}
            </p>
            <p className="infoCompontent"><span className="titleComponent">COOLER: </span>{preBuilder.cooler}</p>
            <p className="priceComponent"><span className="titleComponent">Prezzo:</span> {`${preBuilder.price}€`}</p>
            <div className="detailsButton">
              <Button text="Compra ora" theme="dark" />
              <Button text="Aggiungi al carrello" theme="light" />
            </div>
          </div>
        </div>
        <div>
          {id === "1" ? (
            <InfoPcBuilder 
            backgroundDetail="#4ee56c"
            textPc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae dignissimos iusto doloribus aperiam dolor facere, est expedita beatae tempora! Amet vel error deleniti distinctio nulla odio eveniet ut eaque! Doloribus?" 
            imgPc={imgPc1}
            detail1={mockfile.cpu[2].description}
            imageDetail1={mockfile.cpu[2].img}
            detail2={mockfile.gpu[2].description}
            imageDetail2={mockfile.gpu[2].img}
            />
          ) : id === "2" ? (
            <InfoPcBuilder 
            backgroundDetail="#4ee56c"
            textPc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae dignissimos iusto doloribus aperiam dolor facere, est expedita beatae tempora! Amet vel error deleniti distinctio nulla odio eveniet ut eaque! Doloribus?" 
            imgPc={imgPc1}
            detail1={mockfile.cpu[4].description}
            imageDetail1={mockfile.cpu[4].img}
            detail2={mockfile.gpu[2].description}
            imageDetail2={mockfile.gpu[2].img}
            />
          ) : id === "3" ? (
            <InfoPcBuilder 
            backgroundDetail="#7756AD"
            textPc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae dignissimos iusto doloribus aperiam dolor facere, est expedita beatae tempora! Amet vel error deleniti distinctio nulla odio eveniet ut eaque! Doloribus?" 
            imgPc={imgPc1}
            detail1={mockfile.cpu[1].description}
            imageDetail1={mockfile.cpu[1].img}
            detail2={mockfile.gpu[1].description}
            imageDetail2={mockfile.gpu[1].img}
            />
          ) : id === "4" ? (
            <InfoPcBuilder 
            backgroundDetail="#7756AD"
            textPc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae dignissimos iusto doloribus aperiam dolor facere, est expedita beatae tempora! Amet vel error deleniti distinctio nulla odio eveniet ut eaque! Doloribus?" 
            imgPc={imgPc1}
            detail1={mockfile.cpu[1].description}
            imageDetail1={mockfile.cpu[1].img}
            detail2={mockfile.gpu[4].description}
            imageDetail2={mockfile.gpu[4].img}
            />
          ) : id === "5" ? (
            <InfoPcBuilder 
            backgroundDetail="#A333FF"
            textPc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae dignissimos iusto doloribus aperiam dolor facere, est expedita beatae tempora! Amet vel error deleniti distinctio nulla odio eveniet ut eaque! Doloribus?" 
            imgPc={imgPc1}
            detail1={mockfile.cpu[0].description}
            imageDetail1={mockfile.cpu[0].img}
            detail2={mockfile.gpu[0].description}
            imageDetail2={mockfile.gpu[0].img}
            />
          ) : id === "6" ? (
            <InfoPcBuilder 
            backgroundDetail="#A333FF"
            textPc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae dignissimos iusto doloribus aperiam dolor facere, est expedita beatae tempora! Amet vel error deleniti distinctio nulla odio eveniet ut eaque! Doloribus?" 
            imgPc={imgPc1}
            detail1={mockfile.cpu[3].description}
            imageDetail1={mockfile.cpu[3].img}
            detail2={mockfile.gpu[0].description}
            imageDetail2={mockfile.gpu[0].img}
            />
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default PrebuildDetail;
