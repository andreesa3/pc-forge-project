import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import mockfile from "/mockfile.json";
import Button from "../components/home-components/Button";
import InfoPcBuilder from "../components/InfoPcBuilder";

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
            <InfoPcBuilder />
          ) : id === "2" ? (
            <InfoPcBuilder />
          ) : id === "3" ? (
            <InfoPcBuilder />
          ) : id === "4" ? (
            <InfoPcBuilder />
          ) : id === "5" ? (
            <InfoPcBuilder />
          ) : id === "6" ? (
            <InfoPcBuilder />
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default PrebuildDetail;
