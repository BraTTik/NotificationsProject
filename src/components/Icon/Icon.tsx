import React, { FC } from 'react'
import { IconType } from './IconTypes'
import { nodes } from './IconNodes'
import './Icon.scss'

type IconProps = {
  type: IconType
}

export const Icon: FC<IconProps> = (props) => {
  const { type } = props

  if (!nodes[type]) return null

  return (
    <span className='icon'>
      { nodes[type] }
    </span>
  )
}
