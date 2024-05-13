import { createSelector, createFeatureSelector } from '@ngrx/store';
import { UserState } from './user.reducers';

export const selectUserState = createFeatureSelector<UserState>('users');

export const selectLoading = createSelector(
  selectUserState,
  (state: UserState) => state.loading
);