import { NotificationAction, NotificationActionEnum, NotificationReducer } from './types'
import { updateState } from '../helpers'
import { updateItemInArrayByIndex } from '../../../utils/arrayUtils'

const initialState: NotificationReducer = {
  notifications: []
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

    default:
      return state
  }
}
