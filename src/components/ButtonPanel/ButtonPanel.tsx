import React from 'react'
import { Button } from '../Button'
import './ButtonPanel.scss'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'

export const ButtonPanel = () => {
  const { removeAllEvents, clearNotifications, toggleNotificationWindow } = useActions()
  const show = useTypedSelector(state => state.notifications.showNotifications)
  return (
    <div className='button-panel'>
      <Button title='Mark all read' onClick={clearNotifications} />
      <Button title='Remove all events' onClick={removeAllEvents} />
      <Button title='Toggle notification list' onClick={() => toggleNotificationWindow(!show)} />
    </div>
  )
}
