import React, { use } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";

const Bottles = ({ BottlesPromise }) => {
  const bottles = use(BottlesPromise);
  return (
    <div className="bottles-container">
      {bottles.map((bottle) => (
        <Bottle key={bottle.id} bottle={bottle}></Bottle>
      ))}
    </div>
  );
};

export default Bottles;
