import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import credentialsReducer from '../pages/credentials/credentialSlice'

export const store = configureStore({
  reducer: {
    credentials: credentialsReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
