import axios from "axios";
import { put, call, takeLatest, all } from "redux-saga/effects";

const applyAxios = (weather: any) => {
  const api_key = process.env.REACT_APP_WEATHER_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${weather.area}&appid=${api_key}`;
  return axios.get(url);
};

function* callApi(action: { payload: string }) {
  try {
    type CallType = {
      config?: any;
      data?: any;
      headers?: any;
      request?: any;
      status?: number;
      statusText?: string;
    };
    const res: CallType = yield call(applyAxios, action.payload);
    yield put({
      type: "weather/weatherSubmit",
      payload: {
        weather: res.data.weather[0].main,
      },
    });
  } catch (error) {
    yield put({
      type: "weather/weatherSubmit",
      payload: {
        weather: "地域を正しく入力してください！",
      },
    });
  }
}

function* weatherSaga() {
  yield takeLatest("GET_WEATHER", callApi);
}

export default function* rootSaga() {
  yield all([weatherSaga()]);
}
