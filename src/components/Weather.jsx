import React, { useEffect, useState } from "react";
import "./Weather.css";

const Weather = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("London");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=1df0bcf9aff676421da5ff412ca28a32`;
      const response = await fetch(url);
      const resJson = await response.json();
      setCity(resJson.main);
    };
    fetchApi();
  }, [search]);

  return (
    <>
      <div>
        <h1 className="heading">Weather App</h1>
      </div>
      <div className="main">
        <div className="search">
          <input
            className="input"
            placeholder="search.."
            type="search"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>
      </div>
      {!city ? (
        <p className="nodata">No data found</p>
      ) : (
        <>
          <div className="result">
            <h2 className="location">
              <ion-icon name="location-outline"></ion-icon>
              {search.toUpperCase()}
            </h2>
            <h2 className="temp">{city.temp}°C </h2>
            <h3>MAX-TEMP: {city.temp_min}°C </h3>
            <h3>MAX-TEMP: {city.temp_max}°C</h3>
            <h3>HUMIDITY: {city.humidity}g.m-3</h3>
          </div>
          <div className="foot"><h2>Created by TARUN PAL</h2></div>
        </>
      )}
    </>
  );
};

export default Weather;
