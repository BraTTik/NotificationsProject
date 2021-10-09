import { NotificationType } from '../../../models/NotificationType'


export type NotificationReducer = {
  notifications: NotificationType[]
  showNotifications: boolean
}

export enum NotificationActionEnum {
  SET_NOTIFICATIONS = 'SET_NOTIFICATIONS',
  READ_NOTIFICATION = 'READ_NOTIFICATION',
  CLEAR_NOTIFICATIONS = 'CLEAR_NOTIFICATIONS',
  ADD_EVENT = 'ADD_EVENT',
  REMOVE_ALL_EVENTS = 'REMOVE_ALL_EVENTS',
  TOGGLE_NOTIFICATION_WINDOW = 'TOGGLE_NOTIFICATION_WINDOW',
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

export interface RemoveAllEvents {
  type: NotificationActionEnum.REMOVE_ALL_EVENTS
  payload?: boolean
}

export interface ToggleNotificationWindow {
  type: NotificationActionEnum.TOGGLE_NOTIFICATION_WINDOW,
  payload: boolean
}

export type NotificationAction =
  | SetNotifications
  | ReadNotification
  | ClearNotifications
  | AddEvent
  | RemoveAllEvents
  | ToggleNotificationWindow
