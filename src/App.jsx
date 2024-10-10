import React from "react";
import Section from "./components/Section";
import "./App.css"; // For layout

function App() {
  return (
    <div className="App">
      <header>
        <h1>Lachlan Kenya</h1>
      </header>
      <div className="sections">
        <Section
          imageSrc="path-to-image1.jpg"
          title="Crop Protection"
          description="Insect, disease and weeds are the greatest threats to our food supply."
        />
        <Section
          imageSrc="path-to-image2.jpg"
          title="Crop Nutrition"
          description="Nutrient management is critical in order to increase crop yields."
        />
        <Section
          imageSrc="path-to-image3.jpg"
          title="Seeds"
          description="Promoting healthy living through the supply of premium seeds."
        />
        <Section
          imageSrc="path-to-image4.jpg"
          title="Public Health"
          description="We promote the welfare of the entire population."
        />
      </div>
    </div>
  );
}

export default App;
