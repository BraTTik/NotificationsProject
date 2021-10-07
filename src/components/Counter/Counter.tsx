import React, { FC } from 'react'
import classnames from 'classnames'
import './Counter.scss'

type CounterType = {
  count: number
  top?: boolean
  left?: boolean
  right?: boolean
  bottom?: boolean
}

export const Counter: FC<CounterType> = props => {
  const { count = 0, ...rest } = props
  const classes = classnames('counter', { show: !!count, ...rest })
  return (
    <div className={classes}>
      { count }
    </div>
  )
}
