import React from 'react'
import { Counter, Icon, IconTypes } from 'components'
import { EventList } from './EventList'
import './NotificationBell.scss'
import { useOnClickOutside } from '../../hooks/useOnClickOutside'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useActions } from '../../hooks/useActions'

export const NotificationBell = () => {
  const { notifications: events, showNotifications: showEventList } = useTypedSelector(state => state.notifications)
  const { toggleNotificationWindow } = useActions()
  const newEvents = events.filter(i => i.isNew)
  const newMessagesCount = newEvents.length

  const handleClose = () => toggleNotificationWindow(false)

  const handleToggleShown = () =>
    toggleNotificationWindow(!showEventList)

  return (
    <div className='notification-bell' onClick={handleToggleShown}>
      <Icon type={IconTypes.bell} />
      <Counter count={newMessagesCount} top right />
      <EventList events={newEvents} show={showEventList} handleClose={handleClose} />
    </div>
  )
}
