import { TabButton } from "../../components";

import { useTabs } from "../../hooks";
import {
  ComicResult,
  EventResult,
  SeriesResult,
  StoryResult,
} from "../../types";
import { DetailsContentTab } from "./DetailContentTab";
import styles from "./DetailsTabContainer.module.css";

interface IDetailsTabContainerProps {
  comics: ComicResult[];
  series: SeriesResult[];
  events: EventResult[];
  stories: StoryResult[];
}

const DetailsTabContainer = ({
  comics,
  series,
  events,
  stories,
}: IDetailsTabContainerProps) => {
  const {
    tabName,

    handleClickComicsTab,
    handleClickEventsTab,
    handleClickSeriesTab,
    handleClickStoriesTab,
  } = useTabs();

  return (
    <div className={styles.wrapper}>
      <div className={styles.tabButtonContainer}>
        <TabButton
          isSelected={tabName === "Comics"}
          onClick={handleClickComicsTab}
        >
          Comics
        </TabButton>
        <TabButton
          isSelected={tabName === "Stories"}
          onClick={handleClickStoriesTab}
        >
          Stories
        </TabButton>
        <TabButton
          isSelected={tabName === "Series"}
          onClick={handleClickSeriesTab}
        >
          Series
        </TabButton>
        <TabButton
          isSelected={tabName === "Events"}
          onClick={handleClickEventsTab}
        >
          Events
        </TabButton>
      </div>
      <div className={styles.tabContents}>
        <DetailsContentTab
          tabName={tabName}
          comics={comics}
          series={series}
          stories={stories}
          events={events}
        />
      </div>
    </div>
  );
};

export default DetailsTabContainer;
