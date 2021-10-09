import React, { FC } from 'react'
import { formatDateToString } from '../../utils/formatDateToString'

type DateTitleProps = {
  date: Date
}

export const DateTitle: FC<DateTitleProps> = props => {

  return (
    <time dateTime={props.date.toDateString()}>
      { formatDateToString(props.date) }
    </time>
  )
}
