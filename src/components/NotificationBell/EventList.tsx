import React, { FC, useState, useEffect } from 'react'
import classnames from 'classnames'
import { NotificationType } from '../../models/NotificationType'
import { EventItem } from './EventItem'

type EventListProps = {
  events: NotificationType[]
  show: boolean
}

export const EventList: FC<EventListProps> = ({ events, show}) => {
  const [ shown, setShown ] = useState(show)
  const [ closing, setClosing ] = useState(false)

  useEffect(() => {
    if (!show && shown) {
      setClosing(true)
    }
    if (show && !shown) {
      setShown(true)
    }
  }, [show, shown])

  const handleEndAnimation = () => {
    if (!show) {
      setShown(false)
      setClosing(false)
    }
  }

  const classes = classnames('notification-bell__event-list', { shown, closing })

  return (
    <div className={classes} onAnimationEnd={handleEndAnimation}>
      {
        events.map(event => <EventItem event={event} />)
      }
    </div>
  )
}
