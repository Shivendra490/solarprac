import React, { useState } from "react";
import "./main.css";
import planetList from "../planetList";
import earth from "../images/earth.png";

// const planetList = [
//   "earth",
//   "jupiter",
//   "mars",
//   "mercury",
//   "moon",
//   "neptune",
//   "pluto",
//   "saturn",
//   "uranus",
//   "venus",
// ];

const Main = () => {
  const [weight, setWeight] = useState("select planet");
  const [planet, setPlanet] = useState("select planet");

  const handlePlanet = (e) => {
    setPlanet(e.target.value);
  };

  const handleWeight = (e) => {
    setWeight(e.target.value);
  };

  const handleButton = () => {};

  return (
    <div className="main-background">
      <div className="heading">Calculate weight of an object on planet.</div>
      <div className="inputContainer">
        <input
          type="number"
          name="weight"
          className="weight"
          value={weight}
          onChange={handleWeight}
          placeholder="enter weight"
        />
        {/* {console.log(planetList)} */}
        <select
          value={planet}
          name="planet"
          className="planet"
          onChange={handlePlanet}
        >
          {planetList.map((curElem) => {
            return (
              <option value={curElem.planetName} key={curElem.id}>
                {curElem.planetName}
              </option>
            );
          })}
        </select>
        <button className="btn" onClick={handleButton}>
          Calculate weight
        </button>
      </div>

      {/* <div className="invalid-card">
        <div className="invalid">weight is required
        </div>
      </div> */}

      <div className="valid-card">
        <div className="picture">
          <img src={earth} alt="img" />
        </div>
        <div className="main-result-container">
          <div className="result-sq">
            <div className="sq-content">
              The weight of the object on Pluto is
            </div>
            <div className="circle-center">
              <div className="circle">7.00</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
