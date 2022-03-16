import {createFeatureSelector, createSelector} from "@ngrx/store";
import {NotificationsState} from "./notifications.state";

const getNotificationsState = createFeatureSelector<NotificationsState>('notifications');

export const getNotifications = createSelector(getNotificationsState, (state) => state.notifications);

