import React, { useEffect } from "react";
import axios from "axios";

export const InputWeather = (props) => {
  const handleChange = (e) => {
    props.setArea(e.target.value);
  };

  const handleSubmit = () => {
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

  useEffect(() => {
    handleSubmit();
  }, []);

  return (
    <>
      <form>
        <label>
          <input
            type="text"
            value={props.area}
            onChange={handleChange}
            placeholder="都道府県名"
          />
        </label>
      </form>
      <button onClick={handleSubmit}>送信</button>
    </>
  );
};
