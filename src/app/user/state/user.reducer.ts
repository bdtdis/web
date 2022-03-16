import {createReducer, on} from '@ngrx/store';
import {UserState} from "./user.state";
import * as userActions from './user.actions';

export const initialState: UserState = {
  id: 0,
  firstName: '',
  lastName: '',
  email: '',
  favoriteVideos: [],
};

const _userReducer = createReducer(
  initialState,
  on(userActions.logInSuccess, (state, {user}) => ({
    ...user,
  })),
  on(userActions.logOut, () => initialState),
);

export function reducer(state: any, action: any) {
  return _userReducer(state, action);
}
