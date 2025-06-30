import type { FC } from "react";
import PlayIcon from "assets/icons/play-button.png";
import { formatMilliseconds } from "utils/time";
import type { ITrackProps } from "./types";

export const Track: FC<ITrackProps> = ({ item }) => {
  return (
    <div className="flex items-center gap-5 rounded-lg px-2 py-1 transition duration-150 hover:bg-gray-100">
      <button type="button" className="rounded-full">
        <img
          src={PlayIcon}
          alt="play"
          className={`relative left-0.5 w-10 filter-(--fliter-primary) ${!item.preview_url ? "cursor-not-allowed opacity-50" : "cursor-pointer"}`}
        />
      </button>
      <span>{item.name}</span>
      <span className="ml-auto">{formatMilliseconds(item.duration_ms)}</span>
    </div>
  );
};
