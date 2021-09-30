import { createSlice } from "@reduxjs/toolkit";

export const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    weather: { weather: "" },
  },
  reducers: {
    weatherSubmit: (state, action) => {
      state.weather.weather = action.payload.weather;
    },
  },
});
export const getWeather = (payload) => ({ type: "GET_WEATHER", payload });
export const { weatherSubmit } = weatherSlice.actions;
export const selectWeather = (state) => state.weather.weather;
export default weatherSlice.reducer;
