import { fetchJoke } from "./utils";

test("the data is jokes", async () => {
  const data = await fetchJoke();
  expect(data).toHaveProperty("type");
  expect(data).toHaveProperty("setup");
  expect(data).toHaveProperty("punchline");
  expect(data).toHaveProperty("id");
});
