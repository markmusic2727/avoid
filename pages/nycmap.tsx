import React from "react";
import NYCMapView from "./maps/nycmapview";
import CityToggle from "./maps/city-toggle/CityToggle";

const DisplayNYCMap = () => {
  return (
    <NYCMapView>
      <CityToggle />
    </NYCMapView>
  );
};

export default DisplayNYCMap;