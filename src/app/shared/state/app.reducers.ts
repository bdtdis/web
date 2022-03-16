import {ActionReducerMap} from "@ngrx/store";
import {State} from "./app.state";

import {reducer as userReducer} from '../../user/state/user.reducer';
import {reducer as notificationsReducer} from '../notifications/state/notifications.reducer';

export const reducers: ActionReducerMap<State> = {
  user: userReducer,
  notifications: notificationsReducer,
}
