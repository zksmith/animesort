const BASE_URL = 'https://api.jikan.moe/v3/';

// Search
export async function fetchSearchResults(query) {
  const response = await fetch(`${BASE_URL}search/anime?q=${query}`);

  if (response.ok) {
    const json = await response.json();

    return json.results.map((anime) => ({
      title: anime.title,
      image: anime.image_url,
      id: anime.mal_id,
      start_date: anime.start_date,
      type: anime.type,
    }));
  } else {
    throw response.statusText;
  }
}

// Most popular anime
export async function fetchMostPopular() {
  const response = await fetch(`${BASE_URL}top/anime/1/bypopularity`);

  if (response.ok) {
    const json = await response.json();

    return json.top.map((item) => ({
      title: item.title,
      image: item.image_url,
      id: item.mal_id,
    }));
  } else {
    throw response.statusText;
  }
}

// Season data - currentyl summer 2020
export async function fetchSeasonData() {
  const response = await fetch(`${BASE_URL}season/2020/summer`);

  if (response.ok) {
    const json = await response.json();

    return json.anime.map((item) => ({
      title: item.title,
      image: item.image_url,
      id: item.mal_id,
    }));
  } else {
    throw response.statusText;
  }
}

// currently airing anime
export async function fetchAiringData() {
  const response = await fetch(`${BASE_URL}top/anime/1/airing`);

  if (response.ok) {
    const json = await response.json();

    return json.top.map((item) => ({
      title: item.title,
      image: item.image_url,
      id: item.mal_id,
    }));
  } else {
    throw response.statusText;
  }
}

// Individual show/movie details
export async function fetchAnimeData(id) {
  const response = await fetch(`${BASE_URL}anime/${id}`);

  if (response.ok) {
    const json = await response.json();

    // create an array of all the related anime
    // by getting each array in the json.related object
    let relatedArray = [];
    Object.values(json.related).forEach(
      (array) => (relatedArray = [...relatedArray, ...array])
    );

    return {
      image: json.image_url,
      trailer: json.trailer_url,
      title: json.title,
      title_japanese: json.title_japanese,
      type: json.type,
      status: json.status,
      aired_string: json.aired.string,
      duration: json.duration,
      average_score: json.score,
      synopsis: json.synopsis,
      related: relatedArray,
    };
  } else {
    throw response.statusText;
  }
}
