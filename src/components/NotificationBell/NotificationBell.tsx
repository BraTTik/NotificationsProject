import React, { useState } from 'react'
import { Counter, Icon, IconTypes } from 'components'
import { EventList } from './EventList'
import './NotificationBell.scss'
import { useOnClickOutside } from '../../hooks/useOnClickOutside'
import { useTypedSelector } from '../../hooks/useTypedSelector'

export const NotificationBell = () => {

  const [showEventList, setShowEventList] = useState(false)
  const events = useTypedSelector(state => state.notifications.notifications)
  const newEvents = events.filter(i => i.isNew)
  const newMessagesCount = newEvents.length

  const handleClose = () => setShowEventList(false)

  const ref = useOnClickOutside<HTMLDivElement>(handleClose)

  const handleToggleShown = () => setShowEventList(prev => !prev)

  return (
    <div className='notification-bell' onClick={handleToggleShown} ref={ref}>
      <Icon type={IconTypes.bell} />
      <Counter count={newMessagesCount} top right />
      <EventList events={newEvents} show={showEventList} />
    </div>
  )
}
