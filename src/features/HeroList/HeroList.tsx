import { Result } from "../../types";
import styles from "./HeroList.module.css";

interface IHeroListProps {
  heros: Result[];
  handleClickHero: (index: number) => void;
}

export const HeroList = ({ heros, handleClickHero }: IHeroListProps) => (
  <div className={styles.heroBackground}>
    <ul className={styles.heroList}>
      {heros.map(({ name, thumbnail }, index) => (
        <li
          className={styles.heroPortrait}
          key={index}
          onClick={() => handleClickHero(index)}
        >
          <img
            className={styles.heroImage}
            src={`${thumbnail.path}.${thumbnail.extension}`}
          />
          <p>{name}</p>
        </li>
      ))}
    </ul>
  </div>
);
