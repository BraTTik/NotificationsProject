import React from 'react'
import { MainContainer, Row } from 'containers'
import { NotificationBell } from 'components'
import './Header.scss'

export const Header = () => {
  return (
    <MainContainer>
      <header className='header'>
        <Row between middle>
          <h1>Notifications</h1>
          <NotificationBell />
        </Row>
      </header>
    </MainContainer>
  )
}
