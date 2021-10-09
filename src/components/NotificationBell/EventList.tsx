import React, { FC, useState, useEffect } from 'react'
import classnames from 'classnames'
import { NotificationType } from '../../models/NotificationType'
import { EventItem } from './EventItem'
import { usePreviousValue } from '../../hooks/usePreviousValue'
import { useActions } from '../../hooks/useActions'

const INITIAL_AMOUNT_TO_SHOW = 5

type EventListProps = {
  events: NotificationType[]
  show: boolean
  handleClose: () => void
}

export const EventList: FC<EventListProps> = ({ events, show, handleClose }) => {

  const { readNotification } = useActions()

  const [ shown, setShown ] = useState(show)
  const [ closing, setClosing ] = useState(false)
  const [amountToShow, setAmountToShow] = useState(INITIAL_AMOUNT_TO_SHOW)
  const eventsAmount = events.length

  const previousAmount = usePreviousValue(eventsAmount)
  const shownEvents = events.slice(0, amountToShow)

  const updateAmountToShow = () => {
    setAmountToShow(prev => prev + 1)
  }

  const setReadNotifications = () => {
    shownEvents.forEach(event => {
      readNotification(event.id)
    })
  }

  useEffect(() => {
    if (!show && shown) {
      setClosing(true)
    }
    if (show && !shown) {
      setShown(true)
    }
  }, [show, shown])

  useEffect(() => {
    if (eventsAmount > previousAmount && shown) {
      updateAmountToShow()
    }
  }, [eventsAmount, previousAmount, shown])

  const handleOnClose = () => {
    if (!show) {
      setShown(false)
      setClosing(false)
      setAmountToShow(INITIAL_AMOUNT_TO_SHOW)
      setReadNotifications()
    }
  }

  const classes = classnames('notification-bell__event-list', { shown, closing })

  const emptyList = (
    <div className='notification-bell__event-list__item'>
      No new events
    </div>
  )

  return (
    <div className={classes} onAnimationEnd={handleOnClose} onClick={event => event.stopPropagation()}>
      {
        events.length
          ? shownEvents.map(event => <EventItem event={event} />)
          : emptyList
      }
      <div className='notification-bell__event-list__button' onClick={handleClose}>show all...</div>
    </div>
  )
}
