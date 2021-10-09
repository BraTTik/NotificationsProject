import { NotificationAction, NotificationActionEnum } from './types'
import { NotificationType } from '../../../models/NotificationType'

const actionCreator = <T, P>(type: T, payload: P) => ({type, payload})

export const ActionsCreators = {
  setNotifications: (list: NotificationType[]): NotificationAction => actionCreator(NotificationActionEnum.SET_NOTIFICATIONS, list),
  addEvent: (event: NotificationType): NotificationAction => actionCreator(NotificationActionEnum.ADD_EVENT, event),
  clearNotifications: (): NotificationAction => actionCreator(NotificationActionEnum.CLEAR_NOTIFICATIONS, true),
  readNotification: (id: string): NotificationAction => actionCreator(NotificationActionEnum.READ_NOTIFICATION, id),
  toggleNotificationWindow: (show: boolean): NotificationAction => actionCreator(NotificationActionEnum.TOGGLE_NOTIFICATION_WINDOW, show),
  removeAllEvents: (): NotificationAction => actionCreator(NotificationActionEnum.REMOVE_ALL_EVENTS, true)
}
