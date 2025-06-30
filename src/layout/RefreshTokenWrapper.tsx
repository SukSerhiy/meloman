import { useState, useEffect } from "react";
import type { FC, ReactNode } from 'react';
import { useAppSelector, useAppDispatch } from "@redux/store";
import * as authActions from "@redux/reducers/auth/slice";
import {
  getAccessToken,
  getExpireTime,
  getRefreshLoading,
  getLastRefreshDate,
} from "@redux/reducers/auth/selectors";

type Props = {
  children: ReactNode | ReactNode[];
};

const RefreshTokenWrapper: FC<Props> = ({ children }) => {
  const dispatch = useAppDispatch();
  const accessToken = useAppSelector(getAccessToken);
  const expireTime = useAppSelector(getExpireTime);
  const lastRefreshDate = useAppSelector(getLastRefreshDate);
  const isRefreshing = useAppSelector(getRefreshLoading);
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    setIsRendered(true);
  }, []);

  useEffect(() => {
    const needRefresh =
      !accessToken ||
      !lastRefreshDate ||
      !expireTime ||
      new Date(lastRefreshDate + expireTime * 1000 + 5).getTime() <=
        new Date().getTime();

    if (needRefresh) {
      dispatch(authActions.refreshToken());
    }
  }, [accessToken, lastRefreshDate, expireTime, dispatch]);

  if (!isRendered) {
    return null;
  }

  return isRefreshing ? "loading..." : children;
};

export default RefreshTokenWrapper;
