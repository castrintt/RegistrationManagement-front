import React from "react";
import LoadingGif from "@assets/Balls_line.gif";
import styles from "./Loading.module.css";

type Props = {
  isLoading: boolean;
};

const Loading = ({ isLoading }: Props) => {
  return (
    <>
      {isLoading ? (
        <div className={styles.black_screen}>
          <img
            data-cy="loading-image"
            className={styles.gif}
            src={LoadingGif}
            alt=""
          />
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Loading;
