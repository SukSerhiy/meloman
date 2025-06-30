import { useTranslation } from "react-i18next";
import { SearchInput } from "ui/SearchInput";
import HeadphonesIcon from "assets/icons/headphones.png";

export const Header = () => {
  const { t } = useTranslation();

  return (
    <header className="bg-primary flex w-full items-center gap-3 p-2">
      <a href="/" className="flex items-center gap-4">
        <div className="bg-secondary inline-block rounded-full p-3">
          <img
            src={HeadphonesIcon}
            alt="headphones"
            className="max-w-9 filter-(--filter-logo)"
          />
        </div>
        <p className="text-secondary-text font-wdxl text-3xl font-bold tracking-wide text-gray-200 uppercase text-shadow-md">
          {t("Header.title")}
        </p>
      </a>
      <SearchInput />
    </header>
  );
};
