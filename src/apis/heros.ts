export const fetchHeros = async () => {
  const json = await (
    await fetch(
      `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters?limit=50&orderBy=modified&series=24229,1058,2023`
    )
  ).json();

  return json.data.result;
};

export const fetchOneHeroDetails = async (id: number) => {
  const [comicJson, seriesJson, eventJson] = await Promise.all([
    fetch(
      `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters/${id}/comics`
    ).then((res) => res.json()),
    fetch(
      `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters/${id}/series`
    ).then((res) => res.json()),
    fetch(
      `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters/${id}/events`
    ).then((res) => res.json()),
  ]);

  return {
    comics: comicJson.data.results,
    series: seriesJson.data.results,
    events: eventJson.data.results,
  };
};
