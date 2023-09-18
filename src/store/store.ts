import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../reducers/user.slice";
import sliceComment from "../reducers/comment.slice";
export const appStore = configureStore({
  reducer: {
    user: userSlice,
    comment: sliceComment,
  },
});

export type AppDispatch = typeof appStore.dispatch;
export type RootState = ReturnType<typeof appStore.getState>;
export type AppStore = typeof appStore;
