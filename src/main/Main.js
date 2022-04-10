import React, { useState } from "react";
import "./main.css";
import planetList from "../planetList"

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
  const [weight, setWeight] = useState("select weight");
  const [planet, setPlanet] = useState("select planet");
  const [result,setResult]=useState(0)
  const [isInvalid,setIsInvalid]=useState(true)
  

  const handlePlanet = (e) => {
    setPlanet(e.target.value);
  };

  const handleWeight = (e) => {
    setWeight(e.target.value);
  };

  const handleButton = () => {
    if(planet=='select planet' ||weight=='select weight'){
      setIsInvalid(true)
    }
    else if(!weight|| !planet){

      setIsInvalid(true)
    }
    else if (weight && planet){
      const res=planetList.filter((curElem)=>curElem.planetName===planet)
      console.log(planet,res)
      setResult(res[0])
      setIsInvalid(false)
    }
    
    
  };

  return (
    <>
    <div className="main-background">
      <div className="heading">Calculate weight of an object on planet.</div>
      <div className="inputContainer">
        <input
          type="number"
          name="weight"
          className="weight"
          min='0'
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
          <option value="selectPlanet">--selectPlanet--</option>
          {planetList.map((curElem) => {
            return <option value={curElem.planetName} key={curElem.id}>{curElem.planetName}</option>;
          })}
        </select>
        <button className="btn" onClick={handleButton}>
          Calculate weight
        </button>
      </div>

      {isInvalid ?

       <div className="invalid-card">
        <div className="invalid">
          <span className="sp">weight and planet both are required</span>
        </div>
      </div> 

      :

      <div className="valid-card">
        <div className="picture">  
        {console.log(typeof result.path)}
          <img src={require(`../images/${result.planetName}.png`)} alt="img"/>
        </div>
        <div className="main-result-container">
            <div className="result-sq">
              <div className="sq-content">The weight of the object on {result.planetName} is</div>
              <div className="circle-center">
              <div className="circle">{result.factor*weight}
              </div>
              </div>
            </div>
        </div>
      </div>
}
    </div>
    
    </>
  );
};

export default Main;
