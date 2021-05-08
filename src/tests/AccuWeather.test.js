import { getForecast } from "../api/AccuWeather";

beforeAll(() => {
	require("whatwg-fetch");
});

describe("AccuWeather API", () => {
	it("returns response", async () => {
		const expected = {
			cityDets: { EnglishName: "Warsaw" },
		};

		const json = await getForecast("warsaw");
		expect(json).toMatchObject(expected);
	});
});
