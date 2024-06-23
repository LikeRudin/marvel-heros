import { Link } from "react-router-dom";

import { SquareButton } from "../../components";

import ProfileImage from "../ProfileImage/ProfileImage";

import styles from "./DetailProfile.module.css";
import { Thumbnail } from "../../types";

interface IDetailsProfileProps {
  thumbnail: Thumbnail;
  name: string;
  description: string;
}

const DetailsProfile = ({
  thumbnail,
  name,
  description,
}: IDetailsProfileProps) => {
  return (
    <div className={styles.wrapper}>
      <SquareButton className={styles.homeButton}>
        <Link className={styles.link} to={"/"}>
          Home
        </Link>
      </SquareButton>
      <div className={styles.profile}>
        <ProfileImage thumbnail={thumbnail} name={name} />

        <div>
          <h1>Description</h1>
          {description ? (
            description
          ) : (
            <img src="/description.png" width="50%" />
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailsProfile;
