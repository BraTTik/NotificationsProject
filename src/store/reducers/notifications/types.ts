import { NotificationType } from '../../../models/NotificationType'


export type NotificationReducer = {
  notifications: NotificationType[]
}

export enum NotificationActionEnum {
  SET_NOTIFICATIONS = 'SET_NOTIFICATIONS',
  READ_NOTIFICATION = 'READ_NOTIFICATION',
  CLEAR_NOTIFICATIONS = 'CLEAR_NOTIFICATIONS',
  ADD_EVENT = 'ADD_EVENT'
}

export interface SetNotifications {
  type: NotificationActionEnum.SET_NOTIFICATIONS
  payload: NotificationType[]
}

export interface ReadNotification {
  type: NotificationActionEnum.READ_NOTIFICATION
  payload: string
}

export interface ClearNotifications {
  type: NotificationActionEnum.CLEAR_NOTIFICATIONS
  payload?: boolean
}

export interface AddEvent {
  type: NotificationActionEnum.ADD_EVENT
  payload: NotificationType
}

export type NotificationAction = SetNotifications | ReadNotification | ClearNotifications | AddEvent
