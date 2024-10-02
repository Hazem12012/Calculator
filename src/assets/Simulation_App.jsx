// import React from "react";
// import { useState } from "react";

// function Simulation_App() {
//   return (
//     <div className="simulation">
//       <div className="container">
//         {/* <Section /> */}
//       </div>
//     </div>
//   );
// }

// function Section() {
//   const [inputValue, setInputValue] = useState(0);
//   return (
//     <div class="section">
//       <div className="input_degree">
//         <h1 className="title"></h1>
//         <div className="input">
//           <span></span>
//           <input
//             type="range"
//             min={0}
//             max={100}
//             onChange={(e)=>setInputValue(e.target.valu)}
//           />
//           <span>{inputValue}</span>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Simulation_App;
import React, { useState } from "react";
import Industrial from "./images/pngtree-glass-production-isometric-composition-png-image_11962692-removebg-preview.png";
import Residentiall from "./images/3d-icon-city-building_951562-3178.avif";
import Streets from "./images/red-traffic-light-flat-illustration_1284-22959.avif";
import Agricultural from "./images/istockphoto-1327331512-612x612.jpg";

export default function Simulation_App() {
  // Define state variables for all sliders
  const [industrialArea, setIndustrialArea] = useState(100);
  const [industrialSolar, setIndustrialSolar] = useState(55);
  const [industrialelectricity_1, setIndustrialelectricity_1] = useState(55);
  const [industrialelectricity_2, setIndustrialelectricity_2] = useState(65);

  const [residentialArea, setResidentialArea] = useState(23);
  const [residentialSolar, setResidentialSolar] = useState(0);

  const [garbage, setGarbage] = useState(0);
  const [wasteBurned, setWasteBurned] = useState(67);
  const [wasteRecycled, setWasteRecycled] = useState(78);
  const [greenSpaces, setGreenSpaces] = useState(75);
  const [trees, setTrees] = useState(91);
  const [environmentalImpact, setEnvironmentalImpact] = useState(-49.5);

  const [total, setTotal] = useState(0);
  function sumation() {
    const sumation =( ( Number(industrialSolar) +
    Number(industrialelectricity_1) -
    Number(industrialArea) ) +(Number(residentialSolar) - Number(residentialArea) )+(Number(wasteRecycled) +
    Number(greenSpaces) -
    (Number(wasteBurned) + Number(trees)))+( Number(wasteRecycled) +
    Number(greenSpaces) -
    (Number(wasteBurned) + Number(trees)))) / 4;

    setTotal(sumation);
  }

  return (
    <div className="simulation">
      <div className="container">
        <h1>Environmental Simulation Game</h1>

        <section className="area-section">
          {/* Industrial Areas */}
          <div className="section-block">
            <img src={Industrial} alt="not found" />
            <div className="rate">
              {" "}
              <h2>Industrial Areas</h2>
              <Pollution_rate
                value={
                  Number(industrialSolar) +
                    Number(industrialelectricity_1) -
                    Number(industrialArea) !==
                  0
                    ? Number(industrialSolar) +
                      Number(industrialelectricity_1) -
                      Number(industrialArea)
                    : Number(industrialSolar) +
                        Number(industrialelectricity_1) -
                        Number(industrialArea) <
                      0
                    ? Number(industrialSolar) +
                      Number(industrialelectricity_1) -
                      Number(industrialArea)
                    : 5
                }
              />
            </div>

            <div className="rates">
              <div>
                <label>Area: {industrialArea}</label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={industrialArea}
                  onChange={(e) => setIndustrialArea(e.target.value)}
                />
              </div>
              <div>
                <label>Solar panels %: {industrialSolar}</label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={industrialSolar}
                  onChange={(e) => setIndustrialSolar(e.target.value)}
                />
              </div>
              <div>
                <label>Electricity %: {industrialelectricity_1}</label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={industrialelectricity_1}
                  onChange={(e) => setIndustrialelectricity_1(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Residential Areas */}
          <div className="section-block">
            <img src={Residentiall} alt="not found" />
            <div className="rate">
              {" "}
              <h2>Residential Areas</h2>
              <Pollution_rate
                value={
                  Number(residentialSolar) - Number(residentialArea) !== 0
                    ? Number(residentialSolar) - Number(residentialArea)
                    : Number(residentialSolar) - Number(residentialArea) < 0
                    ? Number(residentialSolar) - Number(residentialArea)
                    : 5
                }
              />
            </div>

            <div className="rates">
              <div>
                <label>Area: {residentialArea}</label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={residentialArea}
                  onChange={(e) => setResidentialArea(e.target.value)}
                />
              </div>
              <div>
                <label>Solar panels %: {residentialSolar}</label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={residentialSolar}
                  onChange={(e) => setResidentialSolar(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Streets */}
          <div className="section-block">
            <img src={Streets} alt="not Found" />
            <div className="rate">
              {" "}
              <h2>Streets</h2>
              <Pollution_rate
                value={
                  Number(industrialelectricity_2) - Number(garbage) !== 0
                    ? Number(industrialelectricity_2) - Number(garbage)
                    : Number(industrialelectricity_2) - Number(garbage) < 0
                    ? Number(industrialelectricity_2) - Number(garbage)
                    : 10
                }
              />
            </div>

            <div className="rates">
              <label>Area: {garbage}</label>
              <input
                type="range"
                min="0"
                max="100"
                value={garbage}
                onChange={(e) => setGarbage(e.target.value)}
              />
              <div>
                <label>Electricity %: {industrialelectricity_2}</label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={industrialelectricity_2}
                  onChange={(e) => setIndustrialelectricity_2(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Agricultural Areas */}

          <div className="section-block">
            <img src={Agricultural} alt="not Found" />

            <div className="rate">
              {" "}
              <h2>Agricultural Areas</h2>
              <Pollution_rate
                value={
                  Number(wasteRecycled) +
                    Number(greenSpaces) -
                    (Number(wasteBurned) + Number(trees)) !==
                  0
                    ? Number(wasteRecycled) +
                      Number(greenSpaces) -
                      (Number(wasteBurned) + Number(trees))
                    : Number(wasteRecycled) +
                        Number(greenSpaces) -
                        (Number(wasteBurned) + Number(trees)) <
                      0
                    ? Number(wasteRecycled) +
                      Number(greenSpaces) -
                      (Number(wasteBurned) + Number(trees))
                    : 1
                }
              />
            </div>

            <div className="rates">
              <div>
                <label>Waste Burned: {wasteBurned}</label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={wasteBurned}
                  onChange={(e) => setWasteBurned(e.target.value)}
                />
              </div>
              <div>
                <label>Waste Recycled: {wasteRecycled}</label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={wasteRecycled}
                  onChange={(e) => setWasteRecycled(e.target.value)}
                />
              </div>
              <div>
                <label>Green Spaces: {greenSpaces}</label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={greenSpaces}
                  onChange={(e) => setGreenSpaces(e.target.value)}
                />
              </div>
              <div>
                <label>Cutting down trees: {trees}</label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={trees}
                  onChange={(e) => setTrees(e.target.value)}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Environmental Impact Section */}
        <section className="environment-impact">
          <h2>Total pollution in the Environment </h2>
          {/* Here you can add a chart or graph for impact score */}
          <div className="impact-graph">
            <button onClick={()=>sumation()} className="sumation">simulation</button>
            <h1>{total}%</h1>
          </div>
        </section>

        {/* Tips Section */}
        <section className="tips-section">
          <h2>Tips</h2>
          <ul>
            <li>
              Increase solar energy usage in industrial and residential areas to
              reduce negative impact.
            </li>
            <li>
              Reduce garbage in streets and burning of agricultural waste.
            </li>
            <li>
              Increase green spaces and tree planting for positive impact.
            </li>
            <li>
              Balance development with environmental conservation for
              sustainable growth.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

function Pollution_rate({ value }) {
  return (
    <div className="background-rate">
      <h2>Pollution Rate</h2>
      <h3>{value}</h3>
    </div>
  );
}
