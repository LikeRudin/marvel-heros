import { useState, useEffect } from "react";
import { fetchOneHeroDetails } from "../apis/heros";

import { useParams, useLocation } from "react-router-dom";
import LoadingDetail from "../features/LoadingDetails/LoadingDetails";

import DetailsProfile from "../features/DetailProfile/DetailProfile";
import { DetailsTabContainer } from "../features/DetailsTabContainer";
import { ComicResult, EventResult, SeriesResult, StoryResult } from "../types";

export interface DetailsApiResponse {
  comics: ComicResult[];
  stories: StoryResult[];
  events: EventResult[];
  series: SeriesResult[];
}

const Details = () => {
  const {
    state: { thumbnail, name, description },
  } = useLocation();
  const { characterId } = useParams();

  const [isLoading, setIsLoading] = useState(true);

  const [details, setDetails] = useState<DetailsApiResponse>();

  useEffect(() => {
    (async () => {
      const data = await fetchOneHeroDetails(characterId as string);
      setDetails(data);
      setIsLoading(false);
    })();
  }, [characterId]);
  return (
    <div>
      {isLoading ? (
        <LoadingDetail thumbnail={thumbnail} name={name} />
      ) : (
        <div>
          <DetailsProfile
            thumbnail={thumbnail}
            name={name}
            description={description}
          />
          <DetailsTabContainer
            comics={details!.comics}
            stories={details!.stories}
            series={details!.series}
            events={details!.events}
          />
        </div>
      )}
    </div>
  );
};

export default Details;
