export async function fetchSearchResults(query) {
  const response = await fetch(
    `https://api.jikan.moe/v3/search/anime?q=${query}&page=1`
  );

  if (response.ok) {
    const json = await response.json();
    return json.results;
  }
}
