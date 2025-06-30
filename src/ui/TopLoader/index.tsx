import { useRef, useEffect, useState } from "react";
import LoadingBar from "react-top-loading-bar";
import type { LoadingBarRef } from "react-top-loading-bar";
import useTopLoader from 'hooks/useTopLoader';

const TopLoader = () => {
  const { loading } = useTopLoader();
  const [loadingOn, setLoadingOn] = useState(false);
  const ref = useRef<LoadingBarRef>(null);

  useEffect(() => {
    if (loading) {
      if (!loadingOn) {
        setLoadingOn(true);
        ref.current?.continuousStart();
      }
    } else {
      if (loadingOn) {
        setLoadingOn(false);
        ref.current?.complete();
      }
    }
  }, [loading, loadingOn]);

  return <LoadingBar color="#f11946" ref={ref} shadow={true} />;
};

export default TopLoader;
