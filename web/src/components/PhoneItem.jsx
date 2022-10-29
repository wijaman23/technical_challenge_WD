import React from "react";
import Iphone7 from "../assets/images/IPhone_7.png";
import Galaxy from "../assets/images/Galaxy_S7.png";
import Honor from "../assets/images/Honor_10.png";
import Moto from "../assets/images/Moto_G6.png";
import Nokia from "../assets/images/Nokia_7.1.jpg";
import P10 from "../assets/images/P10_Lite.jpg";
import Xiaomi from "../assets/images/Xiaomi_MI_A2.jpeg";
import Zen from "../assets/images/ZenPhone_5.jpg";

function PhoneItem({
  name,
  description,
  manufacturer,
  color,
  price,
  screen,
  processor,
  ram,
  imageFileName,
}) {
  function photo(imageMovil) {
    if (imageMovil === "IPhone_7.png") {
      return Iphone7;
    } else if (imageMovil === "Galaxy_S7.png") {
      return Galaxy;
    } else if (imageMovil === "Honor_10.png") {
      return Honor;
    } else if (imageMovil === "Moto_G6.png") {
      return Moto;
    } else if (imageMovil === "Nokia_7.1.jpg") {
      return Nokia;
    } else if (imageMovil === "P10_Lite.jpg") {
      return P10;
    }else if (imageMovil === "Xiaomi_MI_A2.jpeg") {
      return Xiaomi;
    }else if (imageMovil === "ZenPhone_5.jpg") {
      return Zen;
    }
  }

  return (
    <div className="mb-3">
      <div className="card" style={{ width: 500 }}>
        <div className="card-body">
          <div className="mb-3">
            <div></div>
            <h2 className="card-title d-flex justify-content-center">{name}</h2>
            <div className="d-flex justify-content-center">
              <img
                src={photo(imageFileName)}
                alt={name}
                style={{ width: 200 }}
              />
            </div>
            <p className="card-text">{description}</p>
          </div>
          <div>
            <h5 className="mt-3">Information adicional</h5>
            <h6 style={{ fontWeight: 200 }}>Manufacturer: {manufacturer}</h6>
            <h6 style={{ fontWeight: 200 }}>Color: {color}</h6>
            <h6 style={{ fontWeight: 200 }}>Price: {price}€</h6>
            <h6 style={{ fontWeight: 200 }}>Screem : {screen}</h6>
            <h6 style={{ fontWeight: 200 }}>Processor: {processor}</h6>
            <h6 style={{ fontWeight: 200 }}>Ram: {ram}Gb</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhoneItem;
