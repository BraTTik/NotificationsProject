import React, { FC } from 'react'
import classnames from 'classnames'
import './Row.scss'

type RowProps = {
  start?: boolean
  end?: boolean
  center?: boolean
  between?: boolean
  around?: boolean
  top?: boolean
  bottom?: boolean
  middle?: boolean
  className?: string
}

export const Row: FC<RowProps> = props => {
  const { children, className, ...rest } = props

  const classes = classnames('row', { ...rest })
  return (
    <div className={classes}>
      { children }
    </div>
  )
}
