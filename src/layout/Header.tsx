import { useTranslation } from "react-i18next";
import { Music } from "lucide-react";

export const Header = () => {
  const { t } = useTranslation();

  return (
    <header className="bg-primary flex gap-3 items-center p-2 w-full">
      <a href="/" className="flex gap-4 items-center">
        <div className="bg-secondary inline-block rounded-full p-3">
          <Music />
        </div>
        <p className="text-secondary-text">{t("Header.title")}</p>
      </a>
    </header>
  );
};
