import React, { useState, useEffect } from 'react'
import axios from 'axios';

export default function App22() {
  const [temp, setTemp] = useState();

  const fetchWeather = async () => {
      const url = "http://localhost:8080/weather"; 
      const res = await axios.get(url);
      setTemp(res.data);
  };
  
  useEffect(()=>{
    fetchWeather();
  }, []);

  return (
    <div  style={{ fontSize: "24px", marginTop: "10px", backgroundColor: "cornflowerblue" }}>
        <h1>Weather Report</h1>
        <div>{temp}</div>
    </div>
  )
}