export async function fetchSearchResults(query) {
  const response = await fetch(
    `https://api.jikan.moe/v3/search/anime?q=${query}&page=1`
  );

  if (response.ok) {
    const json = await response.json();
    return json.results;
  } else {
    throw response.statusText;
  }
}

export async function fetchMostPopular() {
  const response = await fetch(
    'https://api.jikan.moe/v3/top/anime/1/bypopularity'
  );

  if (response.ok) {
    const json = await response.json();
    return json.top;
  } else {
    throw response.statusText;
  }
}

export async function fetchSeasonData() {
  const response = await fetch('https://api.jikan.moe/v3/season/2020/summer');

  if (response.ok) {
    const json = await response.json();
    return json.anime;
  } else {
    throw response.statusText;
  }
}

export async function fetchAiringData() {
  const response = await fetch('https://api.jikan.moe/v3/top/anime/1/airing');

  if (response.ok) {
    const json = await response.json();
    return json.top;
  } else {
    throw response.statusText;
  }
}
