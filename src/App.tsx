import React, { FC } from 'react'
import { Header } from './containers'
import './index.scss'
import { useEventMaker } from './hooks/useEventMaker'

const App: FC = () => {
  useEventMaker()
  return (
    <>
      <Header />
    </>
  )
}

export default App
