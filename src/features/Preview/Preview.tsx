import { useState, useRef } from "react";
import type { MouseEvent } from "react";

import { Result } from "../../types";

import { Modal, TabButton } from "../../components";

import Tab from "./Tab/Tab";

import styles from "./Preview.module.css";
import ProfileImage from "./ProfileImage/ProfileImage";
import Description from "./Description/Description";

export type TabNamesType = "Stories" | "Series" | "Events" | "Comics";

interface IPreviewProps extends Result {
  show: boolean;
  close: () => void;
}

const Preview = ({
  show,
  close,
  id,
  comics,
  series,
  stories,
  events,
  name,
  thumbnail,
  urls,
  description,
}: IPreviewProps) => {
  const [tabName, setTabName] = useState<TabNamesType>("Stories");

  const handleClickStoriesTab = () => setTabName("Stories");
  const handleClickSeriesTab = () => setTabName("Series");
  const handleClickEventsTab = () => setTabName("Events");
  const handleClickComicsTab = () => setTabName("Comics");

  const modalRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      close();
    }
  };

  return (
    <Modal show={show}>
      <div className={styles.wrapper} onMouseDown={handleMouseDown}>
        <button className={styles.closeButton} onClick={close}>
          close
        </button>
        <div className={styles.profileContainer}>
          <ProfileImage name={name} thumbnail={thumbnail} />
          <Description id={id} description={description} urls={urls} />
        </div>
        <div className={styles.tabContainer}>
          <div className={styles.tabButtonContainer}>
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
            <TabButton
              isSelected={tabName === "Comics"}
              onClick={handleClickComicsTab}
            >
              Comics
            </TabButton>
          </div>
          <div className={styles.tabWrapper}>
            <Tab
              tabName={tabName}
              comics={comics}
              series={series}
              stories={stories}
              events={events}
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Preview;
