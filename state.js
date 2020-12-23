import { createStore } from "redux";

/* types */
const SET_TIME = "SET_TIME";
const SET_NIGHT_LIGHT = "SET_NIGHT_LIGHT";
const SET_LOCATION = "SET_LOCATION";
const SET_LOCATION_NAME = "SET_LOCATION_NAME";
const SET_TEMPERATURE = "SET_TEMPERATURE";
const SET_WEATHER_DESCRIPTION = "SET_WEATHER_DESCRIPTION";
const SET_SHOW_TIMEPICKER = "SET_SHOW_TIMEPICKER";
const SET_ALARM_ON = "SET_ALARM_ON";
const SET_ALARM_TIME = "SET_ALARM_TIME";
const SET_ALARM_SOUNDING = "SET_ALARM_SOUNDING";
const SET_ALARM_NOTIFICATION = "SET_ALARM_NOTIFICATION";

/* actions */
export const setTime = (payload) => ({
  type: SET_TIME,
  payload,
});

export const setNightLight = (payload) => ({
  type: SET_NIGHT_LIGHT,
  payload,
});

export const setLocation = (payload) => ({
  type: SET_LOCATION,
  payload,
});

export const setLocationName = (payload) => ({
  type: SET_LOCATION_NAME,
  payload,
});

export const setTemperature = (payload) => ({
  type: SET_TEMPERATURE,
  payload,
});

export const setWeatherDescription = (payload) => ({
  type: SET_WEATHER_DESCRIPTION,
  payload,
});

export const setShowTimePicker = (payload) => ({
  type: SET_SHOW_TIMEPICKER,
  payload,
});

export const setAlarmTime = (payload) => ({
  type: SET_ALARM_TIME,
  payload,
});

export const setAlarmSounding = (payload) => ({
  type: SET_ALARM_SOUNDING,
  payload,
});

export const setAlarmOn = (payload) => ({
  type: SET_ALARM_ON,
  payload,
});

export const setAlarmNotification = (payload) => ({
  type: SET_ALARM_NOTIFICATION,
  payload,
});

/* reducer */
const initialState = {
  time: new Date(),
  nightLight: false,
  location: null,
  locationName: null,
  temperature: null,
  weatherDescription: null,
  showTimePicker: false,
  alarmOn: false,
  alarmTime: new Date(),
  alarmSounding: false,
  alarmNotification: false,
};

const reducer = (state = initialState, { type, payload }) => {
  const newState = Object.assign({}, state);

  switch (type) {
    case SET_TIME:
      newState.time = payload;
      break;
    case SET_NIGHT_LIGHT:
      newState.nightLight = payload;
      break;
    case SET_LOCATION:
      newState.location = payload;
      break;
    case SET_LOCATION_NAME:
      newState.locationName = payload;
      break;
    case SET_TEMPERATURE:
      newState.temperature = payload;
      break;
    case SET_WEATHER_DESCRIPTION:
      newState.weatherDescription = payload;
      break;
    case SET_SHOW_TIMEPICKER:
      newState.showTimePicker = payload;
      break;
    case SET_ALARM_ON:
      newState.alarmOn = payload;
      break;
    case SET_ALARM_TIME:
      newState.alarmTime = payload;
      break;
    case SET_ALARM_SOUNDING:
      newState.alarmSounding = payload;
      break;
    case SET_ALARM_NOTIFICATION:
      newState.alarmNotification = payload;
      break;
    default:
      break;
  }
  return newState;
};

/* store */
export const store = createStore(reducer);
