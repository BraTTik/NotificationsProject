import React, { FC } from 'react'
import { Header, MainContainer } from './containers'
import { useEventMaker } from './hooks/useEventMaker'
import { NewEventForm } from './components/NewEventForm'
import { ButtonPanel } from './components'
import './index.scss'

const App: FC = () => {
  useEventMaker()
  return (
    <>
      <Header />
      <MainContainer>
        <NewEventForm />
        <ButtonPanel />
      </MainContainer>
    </>
  )
}

export default App
