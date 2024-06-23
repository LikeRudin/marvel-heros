import { Thumbnail } from "../../types";

import styles from "./LoadingDetails.module.css";

interface ILoadingDetailProps {
  thumbnail: Thumbnail;
  name: string;
}

const LoadingDetail = ({ thumbnail, name }: ILoadingDetailProps) => {
  return (
    <div className={styles.container}>
      <img src={`${thumbnail?.path}.${thumbnail?.extension}`} />
      <h1> under investigation about {`${name}`}...</h1>
    </div>
  );
};

export default LoadingDetail;
