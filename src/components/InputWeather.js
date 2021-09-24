import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { weatherInput, getWeather } from "../features/weatherSlice";

export const InputWeather = (props) => {
  useEffect(() => {
    handleSubmit();
  }, []);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(
      weatherInput({
        area: e.target.value,
      })
    );
  };

  const handleSubmit = () => {
    dispatch(getWeather({ area: props.area }));
  };

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
