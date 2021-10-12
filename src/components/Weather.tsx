import * as React from "react";
import { InputWeather } from "./InputWeather";
import { ResultWeather } from "./ResultWeather";

export const Weather = () => {
  return (
    <div>
      <InputWeather />
      <ResultWeather />
    </div>
  );
};
