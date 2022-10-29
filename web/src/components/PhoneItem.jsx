import React from "react";

function PhoneItem({ name, description, manufacturer, color, price, screen, processor, ram }) {
  return (
    <div className="mb-3">
      <div className="card" style={{ width: 500 }}>
        <div className="card-body">
          <div className="mb-3">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{description}</p>
          </div>
          <div>
            <h5>Information adicional</h5>
          manufacturer: {manufacturer}
          color: {color}
          price {price}
          screem : {screen}
          processor: {processor}
          ram: {ram}
         </div>
        </div>
      </div>
    </div>
  );
}

export default PhoneItem;
