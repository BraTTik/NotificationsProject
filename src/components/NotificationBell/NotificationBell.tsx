import React from 'react'
import { Counter, Icon, IconTypes } from 'components'
import { NotificationType } from '../../models/NotificationType'
import { EventList } from './EventList'
import './NotificationBell.scss'

export const NotificationBell = () => {
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

  return (
    <div className='notification-bell' data-counter={newMessagesCount} >
      <Icon type={IconTypes.bell} />
      <Counter count={newMessagesCount} top right />
      <EventList events={events} />
    </div>
  )
}
