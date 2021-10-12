import * as React from "react";
import { useSelector } from "react-redux";
import { selectWeather } from "../features/weatherSlice";

export const ResultWeather = () => {
  const weather: any = useSelector(selectWeather);
  return <div>{weather.weather}</div>;
};
