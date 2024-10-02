import React from "react";
// import images
import poster from "./assets/images/GREENHOUSE-EFFECT-1.jpg";
import box_image from "./assets/images/team-05.png";

// import video from "./images/[EgyBest].Aladdin.2019.BluRay.720p.x264.mp4";

const Story = () => {
  return (
    <div className="Story">
      <div className="container">
        <div className="preview">
          <video
            // src={video}
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
        <Box/>
        <Box/>
        <Box/>
        <Box/>
        <Box/>
        <Box/>

      </div>
    </div>
  );
}
function Box() {
  return (
    <div class="box">
      <img src={box_image} alt="Not found" />

      <div class="content">
        <h3>Test Title</h3>
        <p>
          This site was created by Ꝏ CODE (HAZEM), and this does not include the
          images attached to the site.
          This site was created by Ꝏ CODE (HAZEM), and this does not include the
          images attached to the site.
          This site was created by Ꝏ CODE (HAZEM), and this does not include the
          images attached to the site.
          This site was created by Ꝏ CODE (HAZEM), and this does not include the
          images attached to the site.
        </p>
      </div>
    </div>
  );
}

export default Story;
