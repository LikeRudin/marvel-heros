import type { Thumbnail } from "../../../types";

import styles from "./ProfileImage.module.css";

interface IProfileImageProps {
  name: string;
  thumbnail: Thumbnail;
}
const ProfileImage = ({ name, thumbnail }: IProfileImageProps) => (
  <div className={styles.wrapper}>
    <div className={styles.thumbnail}>
      {thumbnail ? (
        <img src={`${thumbnail.path}.${thumbnail.extension}`} />
      ) : null}
      <p>{name}</p>
    </div>
  </div>
);

export default ProfileImage;
