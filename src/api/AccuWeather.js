const key = "[API KEY]";

const getCity = async (city) => {
	const base = "http://dataservice.accuweather.com/locations/v1/cities/search";
	const query = `?apikey=${key}&q=${city}`;

	const response = await fetch(base + query);
	const data = await response.json();

	return data[0];
};

const getWeather = async (cityDets) => {
	const base = "http://dataservice.accuweather.com/currentconditions/v1/";
	const query = `${cityDets.Key}?apikey=${key}`;

	const response = await fetch(base + query);
	const data = await response.json();

	return data[0];
};

export const getForecast = async (city) => {
	const cityDets = await getCity(city);
	const weather = await getWeather(cityDets);

	return { cityDets, weather };
};
