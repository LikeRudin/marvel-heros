import { useState, useEffect } from "react";
import { Result } from "../types";

import { fetchHeros } from "../apis/heros";

import Preview from "../features/Preview/Preview";
import { HeroList } from "../features/HeroList/HeroList";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [heros, setHeros] = useState<Result[]>([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);

  const handleClickHero = (index: number) => {
    setCurrentHeroIndex(index);
    setIsModalOpen(true);
  };

  const closePreview = () => setIsModalOpen(false);

  useEffect(() => {
    (async () => {
      const data = await fetchHeros();
      setHeros(data);
      setIsLoading(false);
    })();
  }, []);

  return (
    <div>
      {isLoading ? (
        <img src="/loading.jpg" />
      ) : (
        <>
          <HeroList heros={heros} handleClickHero={handleClickHero} />

          <Preview
            show={isModalOpen}
            {...heros[currentHeroIndex]}
            close={closePreview}
          />
        </>
      )}
    </div>
  );
};

export default Home;
