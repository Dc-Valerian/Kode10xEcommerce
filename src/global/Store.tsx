import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { TypedUseSelectorHook } from "react-redux/es/types";

import storage from "redux-persist/lib/storage";
import myReducer from "./ReduxState"
import {
  persistStore,
  persistReducer,
  PAUSE,
  PURGE,
  FLUSH,
  REGISTER,
  PERSIST,
  REHYDRATE,
} from "redux-persist";

const persistConfig = {
  key: "SWMG",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, myReducer);

export const Store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

//this will define your dispatch and selector functions

export const UseAppDispatch: () => typeof Store.dispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof Store.getState>
> = useSelector;