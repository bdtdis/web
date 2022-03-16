import {createReducer, on} from '@ngrx/store';
import * as notificationsActions from './notifications.actions';
import {NotificationsState} from "./notifications.state";

export const initialState: NotificationsState = {
  notifications: []
};

const _notificationsReducer = createReducer(
  initialState,
  on(notificationsActions.pushNotification, (state, {notification}) => ({
    notifications: [...state.notifications, notification],
  })),
  on(notificationsActions.popNotification, (state) => ({
    notifications: [...state.notifications.slice(1)],
  })),
);

export function reducer(state: any, action: any) {
  return _notificationsReducer(state, action);
}
