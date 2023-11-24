import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import mockfile from "/mockfile.json";
import Button from "../components/home-components/Button";
import CpuCards from "../components/cards/CpuCards";
import GpuCards from "../components/cards/GpuCards";
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
            <span className="typeComponent">PREBUILDER</span>
            <h2 className="nameComponent">{preBuilder.name}</h2>
            <p className="descriptionComponent">
              Descrizione:{preBuilder.description}{" "}
            </p>
            <p className="infoCompontent">Socket: {preBuilder.socket}</p>
            <p className="infoCompontent">CPU: {preBuilder.cpu}</p>
            <p className="infoCompontent">GPU: {preBuilder.gpu}</p>
            <p className="infoCompontent">CASE: {preBuilder.case}</p>
            <p className="infoCompontent">POWER: {preBuilder.power}</p>
            <p className="infoCompontent">SSD: {preBuilder.ssd}</p>
            <p className="infoCompontent">RAM: {preBuilder.ram}</p>
            <p className="infoCompontent">
              MOTHERBOARD: {preBuilder.motherboard}
            </p>
            <p className="infoCompontent">COOLER: {preBuilder.cooler}</p>
            <p className="priceComponent">Prezzo: {`${preBuilder.price}€`}</p>
            <div className="detailsButton">
              <Button text="Compra ora" theme="dark" />
              <Button text="Aggiungi al carrello" theme="light" />
            </div>
          </div>
        </div>
        <div>
          {id === "1" ? (
            <InfoPcBuilder/>
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
