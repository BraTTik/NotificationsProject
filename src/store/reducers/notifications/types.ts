import { NotificationType } from '../../../models/NotificationType'


export type NotificationReducer = {
  notifications: NotificationType[]
}

export enum NotificationActionEnum {
  SET_NOTIFICATIONS = 'SET_NOTIFICATIONS',
  READ_NOTIFICATION = 'READ_NOTIFICATION'
}

export interface SetNotifications {
  type: NotificationActionEnum.SET_NOTIFICATIONS
  payload: NotificationType[]
}

export interface ReadNotification {
  type: NotificationActionEnum.READ_NOTIFICATION
  payload: string
}

export type NotificationAction = SetNotifications | ReadNotification
