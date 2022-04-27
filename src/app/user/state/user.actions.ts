import {createAction, props} from '@ngrx/store';
import {UserState} from "./user.state";

export const logIn = createAction(
  '[Log In Component] Log In',
  props<{ id: string }>(),
);

export const logInSuccess = createAction(
  '[Users API] Log In Success',
  props<{ user: UserState }>(),
);

export const logOut = createAction(
  '[App Component] Log Out',
);
