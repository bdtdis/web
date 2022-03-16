import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {State} from "../state/app.state";
import * as notificationsActions from "../notifications/state/notifications.actions";
import {NotificationType} from "./state/notifications.state";

@Injectable({
  providedIn: 'root',
})
export class NotificationsService {
  constructor(private store: Store<State>) {
  }

  public addNotification(message: string, type: NotificationType) {
    this.store.dispatch(notificationsActions.pushNotification({notification: {message, type}}));
  }
}
