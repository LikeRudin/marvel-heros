import { Link } from "react-router-dom";
import { URL } from "../../../types";

interface IDescriptionProps {
  description: string;
  id: string | number;
  urls: URL[];
}
import styles from "./Description.module.css";

const Description = ({ description, urls, id }: IDescriptionProps) => (
  <div className={styles.wrapper}>
    <div className={styles.description}>
      <h1>Description</h1>
      {description ? description : <img src="./description.png" width="20%" />}
    </div>
    <div className={styles.linkContainer}>
      <Link className={styles.detailsLink} to={`/character/${id}`}>
        See Details
      </Link>

      {urls.map((item, index) => (
        <a
          className={styles.outerLink}
          href={item.url}
          target="_blank"
          key={index}
        >
          {item.type}
        </a>
      ))}
    </div>
  </div>
);

export default Description;
