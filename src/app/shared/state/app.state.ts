import {UserState} from "../../user/state/user.state";
import {NotificationsState} from "../notifications/state/notifications.state";

export interface State {
  user: UserState;
  notifications: NotificationsState
}
