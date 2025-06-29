import type { FC, ReactNode } from "react";
import { Header } from "./Header";
import TopLoader from 'ui/TopLoader';

type Props = {
  children: ReactNode | ReactNode[];
};

export const HomeLayout: FC<Props> = ({ children }) => {

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <TopLoader />
      <div className="flex-1 bg-secondary py-4 px-3">{children}</div>
    </div>
  );
};
