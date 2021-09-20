import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { weatherInput, weatherSubmit } from "../features/weatherSlice";

export const InputWeather = (props) => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(
      weatherInput({
        area: e.target.value,
      })
    );
  };

  const handleSubmit = () => {
    const api_key = process.env.REACT_APP_WEATHER_API_KEY;
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${props.area}&appid=${api_key}`
      )
      .then((res) => {
        dispatch(
          weatherSubmit({
            weather: res.data.weather[0].main,
          })
        );
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
