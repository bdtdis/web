import {createAction, props} from '@ngrx/store';
import {Notification} from "./notifications.state";

export const pushNotification = createAction(
  '[Notifications Service] Push Notification',
  props<{ notification: Notification }>(),
);

export const popNotification = createAction(
  '[Notifications Effects] Pop Notification'
);
