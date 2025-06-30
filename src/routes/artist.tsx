import { useEffect } from "react";
import { useParams } from "react-router";
import { useTranslation } from "react-i18next";
import { useAppSelector, useAppDispatch } from "@redux/store";
import * as artistAction from "@redux/reducers/artist/slice";
import {
  getArtistData,
  getTopTracks,
  getArtistAlbums,
} from "@redux/reducers/artist/selectors";
import { Track } from "ui/Track";
import { Album } from "ui/Album";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Chevron from "assets/icons/chevron-left.png";
import { HomeLayout } from "../layout/HomeLayout";

export const Artist = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const { id } = useParams();
  const artist = useAppSelector(getArtistData);
  const topTracks = useAppSelector(getTopTracks)?.tracks || [];
  const albums = useAppSelector(getArtistAlbums);

  const { name, images } = artist || {};

  const image = images?.[0]?.url;

  useEffect(() => {
    if (!id) return;
    dispatch(artistAction.fetchArtistData(id));
    dispatch(artistAction.fetchTopTracks({ id }));
    dispatch(artistAction.fetchArtistAlbums({ id, limit: 6 }));
  }, [dispatch, id]);

  return (
    <HomeLayout>
      <div className="container mx-auto">
        <div className="flex flex-col items-center py-5">
          <img
            src={image}
            alt="artist"
            className="aspect-square rounded-full object-cover shadow-lg md:h-[40rem]"
          />
          <h1 className="text-7xl text-shadow-lg">{name}</h1>
        </div>
        <hr className="my-12 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
        <h2 className="mb-5 text-2xl">{t("Artist.top_tracks")}</h2>
        <div className="space-y-3">
          {topTracks.map((item) => {
            return <Track key={item.id} item={item} />;
          })}
        </div>
        <div className="flex items-baseline justify-between">
          <h2 className="my-5 text-2xl">{t("Artist.albums")}</h2>
          <a
            href={`/artist-albums/${id}`}
            className="my-5 text-lg font-bold active:text-shadow-2xs"
          >
            {t("Artist.show_more")}
          </a>
        </div>
        <div className="relative">
          <div className="absolute top-0 right-0 bottom-25 left-0 w-full">
            <button className="custom-prev bg-secondary absolute top-1/2 left-0 z-10 -translate-x-1/2 -translate-y-[45%] cursor-pointer rounded-full p-2 shadow-[inset_0_2px_5px_rgba(0,0,0,0.3)] active:scale-95 md:p-5">
              <img
                src={Chevron}
                alt="chevron left"
                className="w-10 scale-50 filter-(--fliter-primary) md:scale-100"
                draggable={false}
              />
            </button>
            <button className="custom-next bg-secondary absolute top-1/2 right-0 z-10 translate-x-1/2 -translate-y-[45%] cursor-pointer rounded-full p-2 shadow-[inset_0_2px_5px_rgba(0,0,0,0.3)] active:scale-95 md:p-5">
              <img
                src={Chevron}
                alt="chevron left"
                className="w-10 scale-50 rotate-180 filter-(--fliter-primary) md:scale-100"
                draggable={false}
              />
            </button>
          </div>
          <Swiper
            // pagination
            modules={[Pagination, Navigation]}
            spaceBetween={10}
            slidesPerView={3}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            navigation={{
              prevEl: ".custom-prev",
              nextEl: ".custom-next",
            }}
          >
            {albums?.items?.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <Album item={item} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </HomeLayout>
  );
};
