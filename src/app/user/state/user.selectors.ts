import {createFeatureSelector, createSelector} from "@ngrx/store";
import {UserState} from "./user.state";

const getUserState = createFeatureSelector<UserState>('user');

export const isLoggedIn = createSelector(getUserState, (state) => state.id !== 0);

export const getUserDetails = createSelector(getUserState, (state) => ({
  firstName: state.firstName,
  lastName: state.lastName,
  favoriteVideos: state.favoriteVideos,
}));
