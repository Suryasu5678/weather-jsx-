import React, { useState } from "react";
const Weather = ({ setData }) => {
      const [city, setCity] = useState("");

  const handleClick = async () => {
    if (!city) return;

    const apiKey = "346f67d1421f4797b7985731242312";
  const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;
  console.log(url);

    try {
      const response = await fetch(url);
      const result = await response.json();
      if (response.ok) {
 setData((prevData) => [...prevData, result]);      
 } else {
        setData({ error: alert(result.message) });
      }
    } catch (error) {
      setData({ error: "Failed to fetch data" });
    }
  };


  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "50vh",
      }}
    >
      <div
        style={{
          fontSize: "40px",
          color: "red",
          display: "flex",
          height: "200px",
          alignItems: "center",
          marginBottom: "0",
        }}
      >
        weather
      </div>
      <div
        style={{
          border: "2px solid black",
          height: "100px",
          padding: "30px",
          fontWeight: "bold",
          fontFamily: "arial",
          background: "rgb(105, 187, 108)",
        }}
      >
        <label htmlFor="city" style={{ marginRight: "7px" }}>
          search city
        </label>
        <input
          type="text"
          value={city}
          placeholder="search here !"
          onChange={(e) => setCity(e.target.value)}
        />
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <button onClick={handleClick}>Search</button>
        </div>
      </div>
    </div>
  );
};

export default Weather;
