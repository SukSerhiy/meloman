import type { FC, ReactNode } from "react";
import { Header } from "./Header";
import TopLoader from "ui/TopLoader";

type Props = {
  children: ReactNode | ReactNode[];
};

export const HomeLayout: FC<Props> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <TopLoader />
      <div className="bg-secondary flex-1 px-3 py-4 md:px-10">{children}</div>
    </div>
  );
};
