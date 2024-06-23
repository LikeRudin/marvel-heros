import { useState } from "react";

export type TabNamesType = "Stories" | "Series" | "Events" | "Comics";

export const useTabs = () => {
  const [tabName, setTabName] = useState<TabNamesType>("Comics");
  const handleClickStoriesTab = () => setTabName("Stories");
  const handleClickSeriesTab = () => setTabName("Series");
  const handleClickEventsTab = () => setTabName("Events");
  const handleClickComicsTab = () => setTabName("Comics");
  return {
    tabName,
    setTabName,
    handleClickComicsTab,
    handleClickEventsTab,
    handleClickSeriesTab,
    handleClickStoriesTab,
  };
};
