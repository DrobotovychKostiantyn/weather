import axios from 'axios';

export const fetchUserIP = () =>
  axios.get('https://api.ipify.org/?format=json');

export const fetchWeatherTodayByCity = city =>
  axios
    .get(
      `http://api.apixu.com/v1/forecast.json?key=cd2562ed90744c01b5e181304190402&q=${city}&days=7`,
    )
    .then(res => res);

export const fetchWeatherWithIP = async () => {
  const ip = await fetchUserIP();
  const weather = await fetchWeatherTodayByCity(ip.data.ip);

  console.log(weather);

  return weather.data;
};

export const fetchPhoto = (city = 'Kiev') =>
  axios
    .get(
      `https://pixabay.com/api/?key=10077086-9241eba5f03654691e8006d03&q=${city}&image_type=photo&pretty=true`,
    )
    .then(({ data }) => data);
