import React from 'react'
import { render } from '@testing-library/react'
import { Button } from './Button'


describe('Button tests', function() {
  test('button renders correct', () => {
    const { container } = render(<Button title='test title' className='test'/>)
    const button = container.querySelector('.button')
    expect(container.innerHTML).toMatch('test title')
    expect(button?.tagName).toBe('BUTTON')
    expect(button?.classList.contains('test')).toBe(true)
  })
})

