/**
 * Fetching random jokes
 *
 * @returns {Promise<{type: string; setup: string; punchline: string; id: number}>} Joke object or an error
 */
export const fetchJoke = async () => {
  const jokeUrl = "https://official-joke-api.appspot.com/random_joke";

  try {
    const response = await fetch(jokeUrl);
    const jokeResult = await response.json();
    return jokeResult;
  } catch (error) {
    console.error(error);
  }
};
