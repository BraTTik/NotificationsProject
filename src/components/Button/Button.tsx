import React, { ButtonHTMLAttributes, FC, ReactNode } from 'react'
import classnames from 'classnames'
import './Button.scss'

type ButtonProps = {
  title: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button: FC<ButtonProps> = props => {
  const { title, className } = props
  const classes = classnames('button', className)
  return <button {...props} className={classes}>
    { title }
  </button>
}
