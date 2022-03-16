export enum NotificationType {
  ERROR,
  SUCCESS
}

export interface Notification {
  message: string;
  type: NotificationType;
}

export interface NotificationsState {
  notifications: Notification[];
}
