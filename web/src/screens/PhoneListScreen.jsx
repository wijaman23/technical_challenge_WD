import React, { useState } from "react";
import { useEffect } from "react";
import * as phoneService from "../services/phones-service";
import PhoneItem from "../components/PhoneItem";

function PhoneListScreen() {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    phoneService
      .getPhones()
      .then((phones) => setPhones(phones))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="container">
      {phones.map((phone) => (
        <div className="col" key={phone.id}>
          <PhoneItem {...phone} />
        </div>
      ))}
    </div>
  );
}

export default PhoneListScreen;
