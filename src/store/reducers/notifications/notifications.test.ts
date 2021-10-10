import { NotificationAction, NotificationActionEnum, NotificationReducer } from './types'
import { notifications } from './index'
import { makeEvent } from '../../../utils/mockUtils'

const mockInitialState: NotificationReducer = {
  notifications: [],
  showNotifications: false
}

const actionCreator = <T, P>(type: T, payload: P) => ({ type, payload })

describe('Notifications reducer tests', () => {
  describe('Notification state tests', () => {
    const mockedState: NotificationReducer = {
      notifications: [
        {
          id: 'test',
          date: new Date(),
          title: 'title test',
          isNew: true,
        }, {
          id: 'test 2',
          date: new Date(),
          title: 'title test 2',
          isNew: false,
        },
      ],
      showNotifications: false
    }

    test('has an initial state', () => {
      const state = notifications(mockInitialState, {} as NotificationAction)

      expect(Array.isArray(state.notifications)).toBe(true)
      expect(state.notifications.length).toBe(0)
      expect(state.showNotifications).toBe(false)
    })

    test('changes on read notification', () => {
      const state = notifications(
        mockedState, actionCreator(NotificationActionEnum.READ_NOTIFICATION, 'test'))

      expect(state.notifications[0].isNew).toBe(false)
    })

    test('changes on adding event', () => {
      const state = notifications(mockedState, actionCreator(NotificationActionEnum.ADD_EVENT, makeEvent()))
      expect(state.notifications.length).toBe(mockedState.notifications.length + 1)
    })

    test('changes on toggle window', () => {
      let state = notifications(mockedState, actionCreator(NotificationActionEnum.TOGGLE_NOTIFICATION_WINDOW, true))
      expect(state.showNotifications).toBe(true)
      state = notifications(state, actionCreator(NotificationActionEnum.TOGGLE_NOTIFICATION_WINDOW, false))
      expect(state.showNotifications).toBe(false)
    })

    test('clears all notifications', () => {
      const state = notifications(mockedState, actionCreator(NotificationActionEnum.CLEAR_NOTIFICATIONS, true))
      const cleared = state.notifications.filter(i => !i.isNew)

      expect(cleared.length).toEqual(mockedState.notifications.length)
    })

    test('removes all events', () => {
      const state = notifications(mockedState, actionCreator(NotificationActionEnum.REMOVE_ALL_EVENTS, true))

      expect(state.notifications.length).toEqual(0)
    })
  })
})
