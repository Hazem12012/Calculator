import React from "react";
// import images
import poster from "./images/GREENHOUSE-EFFECT-1.jpg";
import box_image_1 from "./images/image-1.jpg";
import box_image_2 from "./images/image-2.jpg";
import box_image_3 from "./images/image-3.jpg";
import box_image_4 from "./images/image-4.jpg";
import box_image_5 from "./images/image-5.jpg";
import box_image_6 from "./images/image-6.jpg";

import video from "./images/Tell us.mp4";

const Story = () => {
  return (
    <div className="Story" id="Importent_4">
      <div className="container">
        <div className="preview">
          <video
            src={video}
            controls
            poster={poster}
          ></video>
        </div>
      </div>
      <Articles></Articles>
    </div>
  );
};

function Articles() {
  return (
    <div class="articles">
      <div className="container">
        <Box imageName={box_image_1}>
          <div class="content">
            <h3>Ocean Acidification</h3>
            <p>
              Cause: Ocean acidification occurs when oceans absorb excess CO2,
              forming carbonic acid and lowering pH levels. This is mainly due
              to fossil fuel emissions and deforestation. Effects: It harms
              marine life, especially coral reefs and shellfish, disrupting
              ecosystems and affecting fishing communities. Solution: Reduce CO2
              emissions, shift to renewable energy, protect forests, establish
              marine reserves, and regulate overfishing.
            </p>
          </div>
        </Box>

        <Box imageName={box_image_2}>
          <div class="content">
            <h3>Wild Fires</h3>
            <p>
              Cause: Climate change creates dry, hot conditions, making
              wildfires more likely. Human activities like land clearing and
              campfires can easily ignite them. Effects: Wildfires destroy
              forests, release CO2, harm ecosystems, displace wildlife and
              people, and cause air pollution. Solution: Improve forest
              management, enhance firefighting, establish early warnings,
              reforest burned areas, and educate on fire safety.
            </p>
          </div>
        </Box>

        <Box imageName={box_image_3}>
          <div class="content">
            <h3>Increased Frequency of Extreme Weather Events</h3>
            <p>
              Cause: Rising temperatures shift weather patterns, increasing
              extreme events. Warmer oceans fuel storms; warmer air holds more
              moisture, causing floods or droughts. Effects: Damages
              infrastructure, displaces communities, causes crop failures, water
              shortages, economic losses, and strains emergency systems.
              Solution: Strengthen early warning systems, improve forecasting,
              develop resilience plans, invest in disaster-resistant
              infrastructure, and adopt water conservation and drought-resistant
              agriculture.
            </p>
          </div>
        </Box>

        <Box imageName={box_image_4}>
          <div class="content">
            <h3>Desertification and Declining Agricultural Productivity</h3>
            <p>
              Cause: Climate change, reduced rainfall, and increased
              temperatures worsen desertification. Unsustainable farming,
              overgrazing, deforestation, and soil erosion degrade land.
              Effects: Expanding deserts reduce arable land, harming food
              security and water availability. Solution: Improved land
              management, reforestation, drought-tolerant crops, sustainable
              irrigation, and agroforestry combat desertification
            </p>
          </div>
        </Box>

        <Box imageName={box_image_5}>
          <div class="content">
            <h3>Test Title</h3>
            <p>
              This site was created by Ꝏ CODE (HAZEM), and this does not include
              the images attached to the site. This site was created by Ꝏ CODE
              (HAZEM), and this does not include the images attached to the
              site. This site was created by Ꝏ CODE (HAZEM), and this does not
              include the images attached to the site. This site was created by
              Ꝏ CODE (HAZEM), and this does not include the images attached to
              the site.
            </p>
          </div>
        </Box>

        <Box imageName={box_image_6}>
          <div class="content">
            <h3>Polar ice sheets</h3>
            <p>
              Cause: Rising global temperatures accelerate the melting of polar
              ice sheets and glaciers, reducing Earth’s albedo and contributing
              to sea level rise. Effects: Rising sea levels threaten coastal
              cities, causing flooding, land loss, and saltwater intrusion,
              potentially displacing millions and increasing climate refugees.
              Solution: Reduce emissions, build sea defenses, restore wetlands,
              use mangroves, and develop long-term adaptation strategies for
              vulnerable communities.
            </p>
          </div>
        </Box>
      </div>
    </div>
  );
}
function Box({ children, imageName }) {
  return (
    <div class="box">
      <img src={imageName} alt="Not found" />
      {children}
    </div>
  );
}

export default Story;
