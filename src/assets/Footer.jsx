// import images
import logo from "./images/logo-search-grid-1x__2_-removebg-preview.png";
export default function Footer() {
  return (
    <div className="footer" id="Footer">
      <div className="container">
        <div className="box">
          <h3>
            <span className="one-pr">Pyramids Guardians {`(NASA）`}</span>
          </h3>
          <ul className="social">
            <li>
              <a href="#" className="youtube">
                <i className="fab fa-youtube"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.spaceappschallenge.org/nasa-space-apps-2024/find-a-team/pyramids-guardians/?tab=members"
                className="NASA"
                target="_blank"
              >
                <i className="fas fa-rocket"></i>
              </a>
            </li>
            <li>
              <a href="#" className="facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
          </ul>
          <p className={"info-media"}>
            Join us in our mission to explore the critical impact of green
            spaces on climate change and CO2 levels. By understanding how trees,
            parks, and other natural areas absorb carbon dioxide and improve air
            quality, we can advocate for their protection and restoration.
            Together, we can raise awareness, drive community engagement, and
            create sustainable solutions to combat climate change. Your
            involvement matters! Let’s work hand in hand to create a healthier,
            greener planet for future generations!
          </p>
        </div>
        <div className="box">
          <ul className="links">
            <li>
              <a href="#Importent_1" for="#importent-1">
                <i className="fas fa-angle-double-right"></i>Learn About Green
                Spaces
              </a>
            </li>
            <li>
              <a href="#Importent_2">
                <i className="fas fa-angle-double-right"></i>Climate Change
                Solutions
              </a>
            </li>
            <li>
              <a href="#Importent_3">
                <i className="fas fa-angle-double-right"></i>Explore the Site
              </a>
            </li>
            <li>
              <a href="#Importent_4">
                <i className="fas fa-angle-double-right"></i>Story
              </a>
            </li>
            <li>
              <a href="#Importent_5">
                <i className="fas fa-angle-double-right"></i>Simulation Game
              </a>
            </li>
          </ul>
        </div>

        <div className="box">
          <div className="line">
            <i className="fas fa-map-marker-alt fa-fw"></i>
            <div className="info">Egypt</div>
          </div>
          <div className="line">
            <i className="far fa-clock fa-fw"></i>
            <div className="info"> From 1-10-2024 To 3-10-2024</div>
          </div>
          <div className="line">
            <i className="fas fa-phone-volume fa-fw"></i>
            <div className="info">
              <span>+20 109 342 0569</span>
              <span>+20 101 848 4175</span>
            </div>
          </div>
        </div>
        <div className="box">
          <img src={logo} alt="Not Found" />
        </div>
      </div>
      <h3>
        Made With
        <span className="two-pr">{`{Pyramids Guardians}`}</span>
      </h3>
    </div>
  );
}
