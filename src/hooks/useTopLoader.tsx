import { useAppSelector } from "@redux/store";
import { getLastReleasesLoading } from "@redux/reducers/lastReleases/selectors";

const useTopLoader = () => {
  const lastReleasesLoader = useAppSelector(getLastReleasesLoading);
  const loading = lastReleasesLoader;

  return { loading };
};

export default useTopLoader;
