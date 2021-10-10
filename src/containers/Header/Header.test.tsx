import React from 'react'
import { Header } from './Header'

jest.mock('components', () => ({
  NotificationBell: () => <div>Bell</div>,
}))

describe('Header', () => {
  test('Header renders correctly', () => {
    const { container, getByRole } = renderWithProvider(() => <Header />)

    expect(container.innerHTML).toMatch('Notifications')
    expect(container.innerHTML).toMatch('Bell')
  })
})
