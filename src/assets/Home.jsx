// import images
import earth from "./images/freepik-export-2024093021jhgj3128ZxIy.png";
export default function Home() {
  return (
    <div className="landing">
      <div className="container">
        <div className="content">
          <div className="text-content">
            <h1>Green Impact 🌍 </h1>
            <p>
              🌳 Trees and green spaces absorb CO2, cooling the planet. 🌡️
              Cutting them down raises CO2 levels, speeds up global warming, and
              harms wildlife. 🐾 Protecting green spaces is vital for a
              healthier, sustainable future. 🌿
            </p>
          </div>
          <div className="earth-image">
            <img src={earth} alt="Not Found" className="earth-image" />
          </div>
        </div>
      </div>
      <a href="#Footer" className="go-down">
        <i className="fas fa-angle-double-down"></i>
      </a>
    </div>
  );
}
