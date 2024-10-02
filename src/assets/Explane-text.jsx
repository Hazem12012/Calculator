import React from "react";

function Explane_text() {
  return (
    <div className="explane">
      <div className="container" id="Importent_5">
        <Content>
          {" "}
          <span className="title">
            <i class="fas fa-angle-double-right"></i>{" "}
            <h1 className="title_name">Problem Statement</h1>
          </span>
          <p className="description" id="Importent_1">
            The Climate Crisis: A Global Emergency Our planet is experiencing
            alarming and rapid environmental changes due to climate change.
            Rising temperatures, increasing sea levels, extreme weather events,
            and biodiversity loss are creating severe challenges that threaten
            both natural ecosystems and human livelihoods. These impacts are
            driving economic instability, deepening social inequalities, and
            intensifying global poverty. Compounding the issue is the widespread
            lack of awareness and understanding of environmental problems. Many
            people remain uninformed or indifferent to the urgency of the
            crisis, slowing the progress toward sustainable solutions. Without
            immediate, coordinated efforts to raise awareness, reduce greenhouse
            gas emissions, and transition to sustainable practices, the damage
            will be irreversible. The time to act is now, and the future of the
            planet depends on the steps we take today.
          </p>
        </Content>
        <Content>
          {" "}
          <span className="title">
            <i className="fas fa-angle-double-right"></i>{" "}
            <h1 className="title_name">Solution</h1>
          </span>
          <p className="description" id="Importent_2">
            Awareness through an Interactive Platform To address climate change,
            we need an interactive platform to raise awareness and educate
            communities on its impacts and how to respond positively and that's
            what we do! Comprehensive Knowledge Hub Trusted data on climate
            change, with detailed information and easy-to-use interactive maps.
            Engaging Content Videos explaining key climate concepts like global
            warming, rising sea levels, and natural disasters, highlighting
            their human and societal impacts. Community Interaction A dedicated
            space for users to share experiences, ask questions, and learn how
            to adapt to climate change. Partnerships with Environmental Startups
            We collaborate with innovative startups like CMT, Ezr3ly, Agrireuse,
            and DEMA to provide cutting-edge solutions and tools that can help
            users take meaningful action.
          </p>
        </Content>
        <Content>
          {" "}
          <span className="title">
            <i class="fas fa-angle-double-right"></i>{" "}
            <h1 className="title_name">Goals of Awareness:</h1>
          </span>
          <p className="description" id="Importent_3">
            Raising Awareness Educating people about the challenges posed by
            climate change and the importance of immediate action. Inspiring
            Action Encouraging individuals to take small steps that can have a
            big impact on tackling climate issues. Building a Community Creating
            a network of passionate individuals working together for positive
            climate solutions. We believe that raising awareness through an
            interactive platform, along with our partnerships with *C.M.T,
            **Ezr3ly, **Agrireuse, and **OEMA*, is key to helping people
            understand and respond to climate change. Together, we can build a
            better future for our planet.
          </p>
        </Content>
        <Content>
          {" "}
          <span className="title">
            <i class="fas fa-angle-double-right"></i>{" "}
            <h1 className="title_name">Explore the Site</h1>
          </span>
          <p className="description" id="Importent_4">
            Your Gateway to Climate Awareness and Action Step into a world where
            learning meets action! Our platform is designed to inspire, educate,
            and empower you to make a real difference in the fight against
            climate change. Here's what you'll find: Interactive Simulations
            Dive into immersive video experiences that simulate real-world
            environmental challenges, showing you the impact of climate change
            and how your actions can make a difference. Engaging Educational
            Content Watch powerful, easy-to-understand videos that break down
            complex climate issues and provide actionable insights on how to
            live more sustainably. Active Participation Join impactful
            initiatives and campaigns that allow you to contribute to meaningful
            change, both locally and globally. Community of Changemakers Connect
            with like-minded individuals who share your passion for protecting
            the planet, exchange ideas, and collaborate on solutions. Explore,
            engage, and be part of the movement towards a better future!
          </p>
        </Content>
        <Content>
          {" "}
          <span className="title">
            <i className="fas fa-angle-double-right"></i>{" "}
            <h1 className="title_name">Our Duty to Preserve the Planet</h1>
          </span>
          <p className="description" >
            We believe that caring for the planet is a shared responsibility.
            Here's how we can contribute to a better future: Use resources
            wisely While we have the ability to utilize Earth's resources, it's
            essential to do so with care and balance. Adopt sustainable
            practices Engage in renewable energy use and reduce waste to protect
            our environment. Lead by example Encourage others to take action and
            embrace sustainability in their daily lives. Work together
            Collective efforts can have a big impact. Collaboration and
            awareness-raising are key to long-term change. Create a lasting
            legacy Our responsibility today is an opportunity to build a better
            future for the next generations. By taking these steps together, we
            can leave a positive impact on the world.
          </p>
        </Content>
      </div>
    </div>
  );
}
function Content({ children }) {
  return <div className="content">{children}</div>;
}

export default Explane_text;
