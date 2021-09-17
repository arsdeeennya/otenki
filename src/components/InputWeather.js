import React from "react";
import axios from "axios";

export const InputWeather = (props) => {

  const handleChange = (e) => {
    props.setArea(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const api_key = process.env.REACT_APP_WEATHER_API_KEY;
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${props.area}&appid=${api_key}`
      )
      .then((res) => {
        props.setWeather(res.data.weather[0].main);
      })
      .catch((res) => {
        console.log(res);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          value={props.area}
          onChange={handleChange}
          placeholder="都道府県名"
        />
      </label>
      <input type="submit" value="送信" />
    </form>
  );
};
