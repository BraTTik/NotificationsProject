import React, { FC } from 'react'
import { NotificationType } from '../../models/NotificationType'

type EventItemProps = {
  event: NotificationType
}

export const EventItem: FC<EventItemProps> = () => {
  return (
    <div>
      Item
    </div>
  )
}
