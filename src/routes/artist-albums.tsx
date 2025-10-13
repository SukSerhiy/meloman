import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useTranslation } from "react-i18next";
import Skeleton from "react-loading-skeleton";
import { useAppSelector, useAppDispatch } from "@redux/store";
import * as artistAction from "@redux/reducers/artist/slice";
import {
  getArtistData,
  getArtistAlbums,
  getArtistAlbumsLoading,
} from "@redux/reducers/artist/selectors";
import { Album } from "ui/Album";
import { Pagination } from "ui/Pagination";
import { HomeLayout } from "../layout/HomeLayout";

export const ArtistAlbums = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const { id } = useParams();
  const artist = useAppSelector(getArtistData);
  const albums = useAppSelector(getArtistAlbums);
  const loading = useAppSelector(getArtistAlbumsLoading);
  const [currentPage, setCurrentPage] = useState(0);

  const { limit = 0, total = 0, items = [] } = albums || {};

  const { name } = artist || {};

  useEffect(() => {
    if (!id) return;
    dispatch(artistAction.fetchArtistData(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (!id) return;
    dispatch(
      artistAction.fetchArtistAlbums({
        id,
        limit: 20,
        offset: currentPage * 20,
      }),
    );
  }, [dispatch, id, currentPage]);

  const loadingPlug = (
    <>
      {Array(10)
        .fill(null)
        .map((_item, key) => (
          <Skeleton key={key} height={349} baseColor="#cecece" />
        ))}
    </>
  );

  return (
    <HomeLayout>
      {/* Breadcrumbs */}
      <div className="mb-2 text-lg">
        <a href={`/artist/${id}`} className="font-bold">
          {name}
        </a>
        <span className="mx-2">&gt;</span>
        <span className="ml-2">{t("ArtistAlbums.albums")}</span>
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4">
        {loading
          ? loadingPlug
          : items.map((item) => <Album key={item.id} item={item} />)}
      </div>
      <div className="flex justify-center mt-6">
        <Pagination
          page={currentPage + 1}
          perPage={limit}
          total={total}
          onPageChange={(page) => setCurrentPage(page - 1)}
        />
      </div>
    </HomeLayout>
  );
};
