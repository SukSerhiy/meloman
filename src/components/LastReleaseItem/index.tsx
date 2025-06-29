import type { FC } from "react";
import type { ILastReleaseItem } from "./types";

const LastReleaseItem: FC<ILastReleaseItem> = ({ item }) => {
  const { id, images } = item;
  const srcSet = images?.map((img) => `${img.url} ${img.width}w`).join(", ");
  return (
    <a href={`/album/${id}`}>
      <img srcSet={srcSet} draggable={false} />
      <p>{item.name}</p>
    </a>
  );
};

export default LastReleaseItem;
