import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

test("App happy path", async () => {
	render(<App />);

	const cityForm = screen.getByTestId("cityForm");
	const cityInput = screen.getByLabelText(/^enter/i);
	const noForecast = screen.getByTestId("d-none");

	expect(noForecast).toBeInTheDocument();

	userEvent.clear(cityInput);
	userEvent.type(cityInput, "Warsaw");
	fireEvent.submit(cityForm);

	const cityName = await screen.findByRole("heading", { name: "Warsaw" });
	expect(noForecast).not.toBeInTheDocument();
	expect(cityName).toBeInTheDocument();
	screen.debug();
});
