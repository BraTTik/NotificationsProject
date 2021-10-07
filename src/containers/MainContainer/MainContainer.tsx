import React, { FC } from 'react'
import classnames from 'classnames'
import './MainContainer.scss'

type MainContainerProps = {
  className?: string
}

export const MainContainer: FC<MainContainerProps> = ({
  children,
  className,
}) => {

  const classes = classnames('main-container', className)
  return (
    <div className={classes}>
      {children}
    </div>
  )
}
