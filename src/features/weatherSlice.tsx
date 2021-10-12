import { createSlice } from "@reduxjs/toolkit";

export const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    weather: { weather: "" },
  },
  reducers: {
    weatherSubmit: (
      state: { weather: { weather: string } },
      action: { payload: { weather: string } }
    ) => {
      state.weather.weather = action.payload.weather;
    },
  },
});
export const getWeather = (payload: string) => ({
  type: "GET_WEATHER",
  payload,
});
export const { weatherSubmit } = weatherSlice.actions;
export const selectWeather = (state: { weather: { weather: string } }) =>
  state.weather.weather;
export default weatherSlice.reducer;
