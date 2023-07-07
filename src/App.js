import "./styles.css";
import React, { useState } from "react";
import touristsDictionary from "./touristsDictionary";

export default function App() {
  var categories = ["Beaches", "Water parks", "Hill Stations"];

  var [touristPlaces, getTouristPlaces] = useState([]);

  function OnCategoryClicked(category) {
    getTouristPlaces(touristsDictionary[category]);
  }
  return (
    <div className="App">
      <header>
        <h1>Hey Tourists!!!</h1>
      </header>

      <h2 class="Subheading">
        Tourism promotes intercultural understanding and fosters connections
        between people from different backgrounds. So, check out some of the
        tourist places you would like to visit
      </h2>
      <ul class="Category">
        {categories.map((category) => (
          <li class="CategoryItem" onClick={() => OnCategoryClicked(category)}>
            <div>{category}</div>
          </li>
        ))}
      </ul>
      <ul class="TouristPlaces">
        {touristPlaces.map((touristPlace) => (
          <li class="TouristPlace">{touristPlace}</li>
        ))}
      </ul>
    </div>
  );
}
