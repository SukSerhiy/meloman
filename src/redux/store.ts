import { useSelector, useDispatch } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import auth from "./reducers/auth/slice";
import lastReleases from "./reducers/lastReleases/slice";
import album from "./reducers/album/slice";
import search from "./reducers/search/slice";
import artist from "./reducers/artist/slice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ['auth']
};

const reducer = combineReducers({
  auth,
  lastReleases,
  album,
  search,
  artist,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
  // @TODO: Временно
  devTools: true,
  // devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export default store;
