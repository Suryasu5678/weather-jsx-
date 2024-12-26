import React,{useState} from 'react'

const Display = ({ data,setData }) => {
     if (!data) return null;
  const removeButton = () => {
    setData((prev) =>
      prev.filter((item) => item.location.name !== data.location.name)
    ); 
  };
  return (
    <>
      {data.current && (
        <div
          style={{
            border: "2px solid black",
            background: "red",
           
            display: "flex",
            justifyContent:"center",alignItems:"center",flexDirection:"column",
          }}
        >
          <h3>{data.location.name}</h3>
          <p>Condition: {data.current.condition.text}</p>
          <p>Temperature: {data.current.temp_c}°C</p>
          <p>Humidity: {data.current.humidity}%</p>
          <div><button onClick={removeButton}>remove</button></div>
        </div>
      )}
      { data.error && (
        <div>
          <p>{data.error}</p>
        </div>
      )}
    </>
  );
};

export default Display