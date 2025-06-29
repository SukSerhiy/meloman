import { useTranslation } from "react-i18next";
import { Music } from "lucide-react";
import { SearchInput } from 'ui/SearchInput';

export const Header = () => {
  const { t } = useTranslation();

  return (
    <header className="bg-primary flex w-full items-center gap-3 p-2">
      <a href="/" className="flex items-center gap-4">
        <div className="bg-secondary inline-block rounded-full p-3">
          <Music />
        </div>
        <p className="text-secondary-text">{t("Header.title")}</p>
      </a>
      <SearchInput />
    </header>
  );
};
