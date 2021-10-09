import React from 'react'
import { render, RenderResult } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from 'store'


type RenderWithProvider = (
  renderComponent: () => React.ReactNode
) => RenderResult

declare global {
  namespace NodeJS {
    interface Global {
      renderWithProvider: RenderWithProvider
    }
  }

  namespace globalThis {
    const renderWithProvider: RenderWithProvider
  }
}

global.renderWithProvider = (renderComponent) => {
  return {
    ...render(<Provider store={store}>{renderComponent()}</Provider>)
  }
}
