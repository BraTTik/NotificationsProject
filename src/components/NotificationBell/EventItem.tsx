import React, { FC } from 'react'
import classnames from 'classnames'
import { NotificationType } from '../../models/NotificationType'
import { DateTitle } from '../DateTitle'

type EventItemProps = {
  event: NotificationType
}

export const EventItem: FC<EventItemProps> = (props) => {
  const { event } = props

  const classes = classnames('notification-bell__event-list__item', { 'new-item': event.isNew })
  return (
    <div className={classes} >
      <div>{ event.title }</div>
      <DateTitle date={event.date} />
    </div>
  )
}
