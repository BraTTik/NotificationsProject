import React from 'react'
import { Button } from '../Button'
import './ButtonPanel.scss'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { MARK_ALL_BUTTON, REMOVE_ALL_BUTTON, TOGGLE_WINDOW_BUTTON } from './constants'

export const ButtonPanel = () => {
  const { removeAllEvents, clearNotifications, toggleNotificationWindow } = useActions()
  const show = useTypedSelector(state => state.notifications.showNotifications)

  return (
    <div className='button-panel'>
      <Button data-testid='button-mark-all' title={MARK_ALL_BUTTON} onClick={clearNotifications} />
      <Button data-testid='button-remove-all' title={REMOVE_ALL_BUTTON} onClick={removeAllEvents} />
      <Button data-testid='button-toggle-all' title={TOGGLE_WINDOW_BUTTON} onClick={() => toggleNotificationWindow(!show)} />
    </div>
  )
}
