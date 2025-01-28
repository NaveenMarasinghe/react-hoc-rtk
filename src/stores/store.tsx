import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { homeAPI } from "../api/homeAPI";
import { dashboardAPI } from "../api/dashboardAPI";
import { TypedUseSelectorHook, useSelector } from "react-redux";

const reducers = combineReducers({
  [homeAPI.reducerPath]: homeAPI.reducer,
  [dashboardAPI.reducerPath]: dashboardAPI.reducer,
});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      homeAPI.middleware,
      dashboardAPI.middleware
    );
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
