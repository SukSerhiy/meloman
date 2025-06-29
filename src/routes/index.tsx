import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Skeleton from "react-loading-skeleton";
import { useAppSelector, useAppDispatch } from "@redux/store";
import * as lastReleasesActions from "@redux/reducers/lastReleases/slice";
import {
  getLastReleasesLoading,
  getLastReleases,
} from "@redux/reducers/lastReleases/selectors";
import LastReleaseItem from "components/LastReleaseItem";
import { Pagination } from "ui/Pagination";
import { HomeLayout } from "../layout/HomeLayout";

export const Home = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const loading = useAppSelector(getLastReleasesLoading);
  const lastReleases = useAppSelector(getLastReleases);
  const [currentPage, setCurrentPage] = useState(0);

  const { limit = 0, total = 0, items = [] } = lastReleases?.albums || {};

  useEffect(() => {
    dispatch(
      lastReleasesActions.fetchLastReleases({
        limit: 20,
        offset: currentPage * 20,
      }),
    );
  }, [dispatch, currentPage]);

  const loadingPlug = (
    <>
      {Array(10)
        .fill(null)
        .map((item, key) => (
          <Skeleton key={key} height={349} baseColor="#cecece" />
        ))}
    </>
  );

  return (
    <HomeLayout>
      <h1 className="text-2xl font-bold mb-5">{t("LastReleases.title")}</h1>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4">
        {loading
          ? loadingPlug
          : items.map((item) => <LastReleaseItem key={item.id} item={item} />)}
      </div>
      {!loading && (
        <div className="flex justify-end">
          <Pagination
            page={currentPage + 1}
            perPage={limit}
            total={total}
            onPageChange={(page) => setCurrentPage(page - 1)}
          />
        </div>
      )}
    </HomeLayout>
  );
};
