import { Comics, Events, Series, Stories } from "../../../types";
import { TabNamesType } from "../Preview";

import styles from "./PreviewTab.module.css";

interface ITabProps {
  tabName: TabNamesType;
  comics: Comics;
  series: Series;
  events: Events;
  stories: Stories;
}

const PreviewTab = ({
  tabName,
  comics,
  series,
  events,
  stories,
}: ITabProps) => {
  let items = [];
  switch (tabName) {
    case "Comics":
      items = comics.items;
      break;
    case "Series":
      items = series.items;
      break;
    case "Events":
      items = events.items;
      break;
    case "Stories":
      items = stories.items;
      break;
  }

  return (
    <div>
      <ul className={styles.wrapper}>
        {items.length > 0
          ? items.map((item, index) => (
              <li key={index} className={styles.listItem}>
                {item.name}
              </li>
            ))
          : ""}
      </ul>
    </div>
  );
};

export default PreviewTab;
