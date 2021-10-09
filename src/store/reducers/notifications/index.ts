import { NotificationAction, NotificationActionEnum, NotificationReducer } from './types'
import { updateState } from '../helpers'
import { updateItemInArrayByIndex } from '../../../utils/arrayUtils'

const initialState: NotificationReducer = {
  notifications: [],
  showNotifications: false
}

export function notifications (state = initialState, action: NotificationAction): NotificationReducer {
  const { type, payload } = action
  switch(type) {
    case NotificationActionEnum.READ_NOTIFICATION: {
      const list = state.notifications
      let foundItemIndex = list.findIndex(item => item.id === payload)
      const updatedItem = updateState(list[foundItemIndex], { isNew: false })
      return updateState(state, { notifications: updateItemInArrayByIndex(list, foundItemIndex, updatedItem) })
    }

    case NotificationActionEnum.SET_NOTIFICATIONS: {
      return updateState(state, { notifications: payload })
    }

    case NotificationActionEnum.ADD_EVENT: {
      const list = state.notifications
      return updateState(state, { notifications: [payload, ...list] })
    }

    case NotificationActionEnum.TOGGLE_NOTIFICATION_WINDOW: {
      return updateState(state, { showNotifications: payload })
    }

    case NotificationActionEnum.CLEAR_NOTIFICATIONS: {
      const notifications = state.notifications.map(item => ({ ...item, isNew: false }))
      return updateState(state, { notifications })
    }

    case NotificationActionEnum.REMOVE_ALL_EVENTS: {
      return updateState(state, { notifications: [] })
    }

    default:
      return state
  }
}
