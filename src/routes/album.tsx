import { useEffect } from "react";
import { useParams } from "react-router";
import { useTranslation } from "react-i18next";
import Skeleton from "react-loading-skeleton";
import { useAppSelector, useAppDispatch } from "@redux/store";
import * as albumActions from "@redux/reducers/album/slice";
import { getAlbumLoading, getAlbumData } from "@redux/reducers/album/selectors";
import { Track } from "ui/Track";
import { HomeLayout } from "../layout/HomeLayout";

export const Album = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const { t } = useTranslation();
  const loading = useAppSelector(getAlbumLoading);
  const album = useAppSelector(getAlbumData);

  const {
    name = "",
    artists = [],
    images = [],
    album_type: albumType = "",
    release_date: releaseDate,
    tracks,
  } = album || {};

  const coverImg = images.find((item) => item.height === 300) || images[1];

  useEffect(() => {
    if (!id) return;
    dispatch(albumActions.fetchAlbumData(id));
  }, [dispatch, id]);

  return (
    <HomeLayout>
      {/* Global container */}
      <div className="container mx-auto flex max-w-5xl flex-col items-center gap-10 px-5 py-10 md:flex-row md:items-start md:px-20">
        {/* Album info container */}
        <div>
          {loading ? (
            <>
              <Skeleton height={300} width={300} />
              <Skeleton />
              <Skeleton />
              <Skeleton />
            </>
          ) : (
            <>
              <img
                src={coverImg?.url}
                alt="cover"
                className="rounded-sm shadow-lg"
              />
              <p className="mt-2 text-center text-2xl font-bold">{name}</p>
              <div className="text-center">
                {artists.map((item, idx) => (
                  <span key={idx}>
                    <a href={`/artist/${item.id}`} className="hover:underline">
                      {item.name}
                    </a>
                    {idx < artists.length - 1 && " & "}
                  </span>
                ))}
              </div>
              <div className="text-center">
                <span>
                  {["album", "single"].includes(albumType)
                    ? t(`Album.${albumType}`)
                    : t("Album.release")}{" "}
                  • {releaseDate?.slice(0, releaseDate.indexOf("-"))}
                </span>
              </div>
            </>
          )}
        </div>
        {/* Tracks continer */}
        <div className="w-full flex-1 space-y-3 md:w-auto">
          {tracks?.items.map((item) => {
            return <Track key={item.id} item={item} />;
          })}
        </div>
      </div>
    </HomeLayout>
  );
};
