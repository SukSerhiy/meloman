import { useEffect, useState } from "react";
import type { FC, ChangeEvent } from "react";
import { useTranslation } from "react-i18next";
import { useAppSelector, useAppDispatch } from "@redux/store";
import * as searchActions from "@redux/reducers/search/slice";
import { getSearchResults } from "@redux/reducers/search/selectors";
import { debounce } from "utils/time";
import { ARTISTS_CATEGORY, ALBUMS_CATEGORY } from "constants/index";
import useSelect from "hooks/useSelect";
import { CategorySelect } from "./CategorySelect";

export const SearchInput: FC = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const { open, setOpen, triggerRef, dropRef } = useSelect();
  const [category, setCategory] = useState(ARTISTS_CATEGORY);
  const [inputFocus, setInputFocus] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [debSearchValue, setDebSearchValue] = useState("");
  const searchResults = useAppSelector(getSearchResults);

  const artists = searchResults?.artists?.items;
  const albums = searchResults?.albums?.items;

  const handleInputChange = (text: string) => {
    setDebSearchValue(text);
  };

  const debouncedInputChange = debounce(handleInputChange, 500);

  const handleFocus = () => {
    setInputFocus(true);
  };

  const handleBlue = () => {
    setInputFocus(false);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchValue(value);
    debouncedInputChange(value);
  };

  useEffect(() => {
    if (inputFocus && searchValue) {
      if (
        (category === ARTISTS_CATEGORY && artists) ||
        (category === ALBUMS_CATEGORY && albums)
      ) {
        setOpen(true);
      }
      setOpen(true);
    }
  }, [searchValue, inputFocus, artists, albums, setOpen, category]);

  useEffect(() => {
    if (debSearchValue && category) {
      dispatch(searchActions.searchByText({ text: debSearchValue, category }));
    }
  }, [debSearchValue, category, dispatch]);

  return (
    <div className="relative ml-10 w-96">
      <div className="flex items-center">
        <CategorySelect selected={category} onSelect={setCategory} />
        <input
          className="w-full rounded-tr-lg rounded-br-lg border-none bg-gray-100 px-3 py-1 outline-0"
          placeholder={t("Header.Search.placeholder")}
          type="search"
          ref={triggerRef}
          value={searchValue}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlue}
        />
      </div>
      <div
        className={`bg-primary absolute right-0 left-0 z-50 mt-1 h-96 max-h-80 translate-y-1 overflow-auto rounded-sm ${open ? "block" : "hidden"}`}
        ref={dropRef}
      >
        {category === ARTISTS_CATEGORY &&
          artists?.map((item) => {
            const { id, name } = item;
            const image = item.images?.[2]?.url || "";
            return (
              <a key={item.id} href={`/artist/${id}`}>
                <div className="flex items-center bg-gray-100 px-2 py-1.5">
                  <img
                    src={image}
                    alt="avatar"
                    className="h-10 w-10 rounded-full"
                  />
                  <span className="ml-3 text-[1.15rem] font-bold">{name}</span>
                </div>
              </a>
            );
          })}
        {category === ALBUMS_CATEGORY &&
          albums?.map((item) => {
            const { id, name, artists: _artists = [] } = item;
            const image = item.images?.[2]?.url || "";
            return (
              <a key={item.id} href={`/album/${id}`}>
                <div className="flex items-center bg-gray-100 px-2 py-1.5">
                  <img
                    src={image}
                    alt="avatar"
                    className="h-10 w-10 rounded-sm"
                  />
                  <div className="ml-3 flex flex-col">
                    <span className="text-lg font-bold">{name}</span>
                    {_artists.map((item, idx) => (
                      <span key={idx}>
                        <span className="hover:underline">{item.name}</span>
                        {idx < _artists.length - 1 && " & "}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            );
          })}
      </div>
    </div>
  );
};
