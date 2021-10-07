import { NotificationAction, NotificationActionEnum, NotificationReducer } from './types'

const initialState: NotificationReducer = {
  notifications: []
}

export function notifications (state = initialState, action: NotificationAction): NotificationReducer {
  switch(action.type) {
    case NotificationActionEnum.READ_NOTIFICATION:
      return state
    case NotificationActionEnum.SET_NOTIFICATIONS:
      return state
    default:
      return state
  }
}
