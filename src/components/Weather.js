import React, { useState } from "react";
import { InputWeather } from "./InputWeather";
import { ResultWeather } from "./ResultWeather";

export const Weather = () => {
  const [area, setArea] = useState("東京都");
  const [weather, setWeather] = useState("");
  return (
    <div>
      <InputWeather
        area={area}
        setArea={setArea}
        setWeather={setWeather}
      />
      <ResultWeather weather={weather} />
    </div>
  );
};
