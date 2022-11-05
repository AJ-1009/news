import React from "react";
import styles from "./news-card.module.css";
function NewsCard({details}) {
  return (
    <div className={styles["main-wrapper"]}>
      <div
        className={styles["img-wrapper"]}
        style={{
          backgroundImage: `url(${details.urlToImage})`,
        }}
      ></div>
      <div className={styles["content-wrapper"]}>
        <div className={styles["author"]}>{details.author}</div>
        <div className={styles["title"]}>
         {details.title}
        </div>
        <div className={styles["description"]}>
         {details.description}
        </div>
        <div className={styles["content"]}>
          {details.content}
        </div>
        <a href={details.url} target="_a" >Link to article</a>
      </div>
    </div>
  );
}

export default NewsCard;
