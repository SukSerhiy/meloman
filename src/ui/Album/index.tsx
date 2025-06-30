import type { FC } from "react";
import type { IAlbumProps } from "./types";

export const Album: FC<IAlbumProps> = ({ item }) => {
  const { id, name, images, artists = [] } = item;
  const srcSet = images?.map((img) => `${img.url} ${img.width}w`).join(", ");
  console.log("item", item);
  return (
    <div>
      <a href={`/album/${id}`} className="group">
        <div className="relative overflow-hidden rounded-sm">
          <img
            srcSet={srcSet}
            draggable={false}
            className="translate duration-250 group-hover:scale-110"
          />
        </div>
        <p className="text-lg font-bold">{name}</p>
      </a>
      {artists.map((artist, idx) => (
        <span key={idx}>
          <a href={`/artist/${artist.id}`} className="hover:underline">
            {artist.name}
          </a>
          {idx < artists.length - 1 && " & "}
        </span>
      ))}
    </div>
  );
};
