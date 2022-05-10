import {createFeatureSelector, createSelector} from "@ngrx/store";
import {UserState} from "./user.state";

const getUserState = createFeatureSelector<UserState>('user');

export const isLoggedIn = createSelector(getUserState, (state) => state.id !== '0');

export const getUserDetails = createSelector(getUserState, (state) => ({
  firstName: state.firstName,
  lastName: state.lastName,
  banned: state.banned,
}));

export const getUserId = createSelector(getUserState, (state) => state.id);
