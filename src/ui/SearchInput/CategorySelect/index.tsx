import type { FC } from "react";
import { useTranslation } from "react-i18next";
import useSelect from "hooks/useSelect";
import DownIcon from "assets/icons/down.png";
import { categories } from "constants/index";
import type { ICategorySelect } from "./types";

export const CategorySelect: FC<ICategorySelect> = ({ selected, onSelect }) => {
  const { open, setOpen, toggleOpen, triggerRef, dropRef } = useSelect();
  const { t } = useTranslation();

  const handleSelect = (category: string) => {
    onSelect(category);
    setOpen(false);
  };

  return (
    <div className="relative tracking-widest">
      <button
        className="flex cursor-pointer items-center rounded-tl-lg rounded-bl-lg border-0 bg-slate-300 py-1 pr-6 pl-3 font-bold outline-0"
        ref={triggerRef}
        onClick={toggleOpen}
      >
        <span>{t(`Header.Search.Categories.${selected}`)}</span>
        <img
          src={DownIcon}
          alt="down"
          className="ml-1 w-3 filter-(--filter-font)"
        />
      </button>
      <div
        className={`absolute right-0 left-0 z-50 w-full translate-y-1.5 overflow-hidden rounded-md bg-gray-100 py-1 shadow-2xl ${open ? "block" : "hidden"}`}
        ref={dropRef}
      >
        {categories.map((item) => {
          return (
            <button
              type="button"
              key={item}
              className="border- w-full cursor-pointer px-1 py-0.5 outline-0 hover:bg-gray-200"
              onClick={() => handleSelect(item)}
            >
              {t(`Header.Search.Categories.${item}`)}
            </button>
          );
        })}
      </div>
    </div>
  );
};
