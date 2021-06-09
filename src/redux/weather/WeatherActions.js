import axios from 'axios';
import {API_KEY, LOCATION} from '../../utils/constants';
import {
  FETCH_WEATHER_FAILURE,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_REQUEST,
} from './WeatherTypes';

const fetchWeatherRequest = () => {
  return {
    type: FETCH_WEATHER_REQUEST,
  };
};

const fetchWeatherSuccess = data => {
  return {
    type: FETCH_WEATHER_SUCCESS,
    payload: data,
  };
};

const fetchWeatherFailure = data => {
  return {
    type: FETCH_WEATHER_FAILURE,
    payload: data,
  };
};

export const fetchWeatherReport = () => {
  return dispatch => {
    dispatch(fetchWeatherRequest());
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${LOCATION.latitude}&lon=${LOCATION.longitude}&exclude=hourly,minutely,alerts&appid=${API_KEY}&units=metric`,
      )
      .then(res => {
        dispatch(fetchWeatherSuccess(res.data));
      })
      .catch(err => {
        dispatch(fetchWeatherFailure(err));
      });
  };
};
