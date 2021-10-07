import React, { FC } from 'react'
import { NotificationType } from '../../models/NotificationType'
import { EventItem } from './EventItem'

type EventListProps = {
  events: NotificationType[]
}

export const EventList: FC<EventListProps> = ({ events}) => {
  return (
    <div className='notification-bell__event-list'>
      {
        events.map(event => <EventItem event={event} />)
      }
    </div>
  )
}
