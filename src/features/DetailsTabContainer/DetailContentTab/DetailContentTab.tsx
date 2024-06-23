import {
  ComicResult,
  EventResult,
  SeriesResult,
  StoryResult,
} from "../../../types";

import styles from "./DetailContentTab.module.css";

interface ITabProps {
  comics: ComicResult[];
  series: SeriesResult[];
  events: EventResult[];
  stories: StoryResult[];
  tabName: string;
}

const DetailContentTab = ({
  tabName,
  comics,
  series,
  events,
  stories,
}: ITabProps) => {
  let items: ComicResult[] | SeriesResult[] | EventResult[] | StoryResult[] =
    [];
  switch (tabName) {
    case "Comics":
      items = comics;
      break;
    case "Series":
      items = series;
      break;
    case "Events":
      items = events;
      break;
    case "Stories":
      items = stories;
      break;
  }

  return (
    <div>
      <ul className={styles.wrapper}>
        {items?.map((item, index) => {
          const { thumbnail, title, description } = item;
          return (
            <li key={index} className={styles.listItem}>
              <div className={styles.card}>
                <img src={`${thumbnail?.path}.${thumbnail?.extension}`} />
                <div>
                  <h3>{title}</h3>
                  <div>{description}</div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DetailContentTab;
