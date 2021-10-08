import React, { useState } from 'react'
import { Counter, Icon, IconTypes } from 'components'
import { NotificationType } from '../../models/NotificationType'
import { EventList } from './EventList'
import './NotificationBell.scss'
import { useOnClickOutside } from '../../hooks/useOnClickOutside'

export const NotificationBell = () => {

  const [showEventList, setShowEventList] = useState(false)
  const events: NotificationType[] = [
    {
      title: 'New event 2',
      date: new Date(),
      id: '1kd',
      isNew: true
    },
    {
      title: 'New event 1',
      date: new Date(),
      id: '1kkkkd',
      isNew: false
    },
  ]
  const newMessagesCount = events.filter(i => i.isNew).length

  const handleClose = () => setShowEventList(false)

  const ref = useOnClickOutside<HTMLDivElement>(handleClose)

  const handleToggleShown = () => setShowEventList(prev => !prev)

  return (
    <div className='notification-bell' data-counter={newMessagesCount} onClick={handleToggleShown} ref={ref}>
      <Icon type={IconTypes.bell} />
      <Counter count={newMessagesCount} top right />
      <EventList events={events} show={showEventList} />
    </div>
  )
}
