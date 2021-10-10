import React from 'react'
import { ButtonPanel } from './ButtonPanel'
import { MARK_ALL_BUTTON, REMOVE_ALL_BUTTON, TOGGLE_WINDOW_BUTTON } from './constants'
import { act, fireEvent } from '@testing-library/react'

const mockAction = jest.fn((prop) => prop)

jest.mock('../../hooks/useActions', () => ({
  useActions: () => ({
    removeAllEvents: mockAction,
    clearNotifications: mockAction,
    toggleNotificationWindow: mockAction
  })
}))


describe('Button panel', () => {

  test('Panel renders correctly', () => {
    const { container } = renderWithProvider(() => <ButtonPanel />)

    expect(container.innerHTML).toMatch(MARK_ALL_BUTTON)
    expect(container.innerHTML).toMatch(REMOVE_ALL_BUTTON)
    expect(container.innerHTML).toMatch(TOGGLE_WINDOW_BUTTON)
  })

  test('Mark all button fires correctly', () => {
    const { getByTestId } = renderWithProvider(() => <ButtonPanel />)

    const button = getByTestId('button-mark-all')
    fireEvent.click(button)
    expect(mockAction).toHaveBeenCalled()
  })

  test('Remove all button fires', () => {
    const { getByTestId } = renderWithProvider(() => <ButtonPanel />)

    const button = getByTestId('button-remove-all')
    fireEvent.click(button)
    expect(mockAction).toHaveBeenCalled()
  })

  test('Window toggles', async () => {
    const { getByTestId } = renderWithProvider(() => <ButtonPanel />)

    const button = getByTestId('button-toggle-all')
    fireEvent.click(button)
    expect(mockAction).toHaveBeenCalledWith(true)
  })
})
