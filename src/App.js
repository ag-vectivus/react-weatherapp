import "./App.css";
import WeatherContextProvider from "./contexts/WeatherContext";
import LocationForm from "../src/components/LocationForm";
import Forecast from "../src/components/Forecast";

function App() {
	return (
		<div className='container my-5 mx-auto'>
			<h1 className='text-center text-muted my4'>Weather App</h1>
			<WeatherContextProvider>
				<LocationForm />
				<Forecast />
			</WeatherContextProvider>
		</div>
	);
}

export default App;
