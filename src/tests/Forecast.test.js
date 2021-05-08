import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Forecast from "../components/Forecast";
import WeatherContextProvider, {
	WeatherContext,
} from "../contexts/WeatherContext";
import { forecast } from "../mocks/forecast";

describe("Forecast component", () => {
	it("Shows nothing as there is no forecast yet", () => {
		render(<Forecast />, { wrapper: WeatherContextProvider });

		const noForecast = screen.getByTestId("d-none");
		expect(noForecast).toBeInTheDocument();
	});

	it("displays Forecast when no forecast", () => {
		render(
			<WeatherContext.Provider value={{ forecast }}>
				<Forecast />
			</WeatherContext.Provider>
		);

		const noForecast = screen.queryByTestId("d-none");
		expect(noForecast).not.toBeInTheDocument();
	});
});
