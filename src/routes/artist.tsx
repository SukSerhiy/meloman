import { useEffect } from "react";
import { useParams } from "react-router";
import { useTranslation } from "react-i18next";
import { useAppSelector, useAppDispatch } from "@redux/store";
import * as artistAction from '@redux/reducers/artist/slice';
import { getArtistData } from '@redux/reducers/artist/selectors';
import { HomeLayout } from "../layout/HomeLayout";

export const Artist = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const artist = useAppSelector(getArtistData);

  const { name, images } = artist || {};

  const image = images?.[0]?.url;

  useEffect(() => {
    if (!id) return;
    dispatch(artistAction.fetchArtistData(id))
    dispatch(artistAction.fetchTopTracks({ id }))
  }, [dispatch, id]);

  return (
    <HomeLayout>
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <img src={image} alt="artist" className="shadow-lg" />
          <h1 className="text-7xl">{name}</h1>
        </div>
      </div>
    </HomeLayout>
  );
};
