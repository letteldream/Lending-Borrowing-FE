import { configureStore } from "@reduxjs/toolkit";
import application from "state/application/reducer";
import transactions from "state/transactions/reducer";

export const store = configureStore({
  reducer: {
    application,
    transactions,
  },
  // adding the api middleware enables caching, invalidation, polling and other features of `rtk-query`
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
