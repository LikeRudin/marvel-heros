import type {
  HerosApiResponse,
  ComicApiResponse,
  SeriesApiResponse,
  StoryApiResponse,
  EventApiResponse,
} from "../types";

export const fetchHeros = async () => {
  const json = await (
    await fetch(
      `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters?limit=50&orderBy=modified&series=24229,1058,2023`
    )
  ).json();

  return (json as HerosApiResponse).data.results;
};

export const fetchOneHeroDetails = async (id: number) => {
  const [comicJson, seriesJson, eventJson, storyJson] = await Promise.all([
    fetch(
      `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters/${id}/comics`
    ).then((res) => res.json()),
    fetch(
      `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters/${id}/series`
    ).then((res) => res.json()),
    fetch(
      `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters/${id}/events`
    ).then((res) => res.json()),
    fetch(
      `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters/${id}/stories`
    ).then((res) => res.json()),
  ]);

  return {
    comics: (comicJson as ComicApiResponse).data.results,
    series: (seriesJson as SeriesApiResponse).data.results,
    events: (eventJson as EventApiResponse).data.results,
    stories: (storyJson as StoryApiResponse).data.results,
  };
};
