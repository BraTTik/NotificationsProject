import React from 'react'
import { Counter } from './Counter'
import { render } from '@testing-library/react'

const checkClassList = (classList: DOMTokenList | string[] = [], classes: string | string[], mode: 'every' | 'some' = 'some') => {
  classes = Array.isArray(classes) ? classes : [classes]
  classList = Array.from(classList)

  return classList[mode](classname => classes.includes(classname))
}

describe('Counter test', () => {
  test('Counter renders with zero and with default class', () => {
    const { container } = render(<Counter count={0} />)

    const counterNode = container.querySelector('div')
    const classList = counterNode?.classList || []
    expect(checkClassList(classList, 'counter')).toBe(true)
    expect(checkClassList(classList, 'show')).toBe(false)
  })

  test('Counter renders with value', () => {
    const { container } = render(<Counter count={6} />)

    const counterNode = container.querySelector('div')
    const classList = counterNode?.classList

    expect(checkClassList(classList, 'show')).toBe(true)
    expect(container.innerHTML).toMatch('6')
  })

  test('Counter renders with position classes', () => {
    const { container } = render(<Counter count={0} bottom top left right />)

    const counterNode = container.querySelector('div')
    const classList = counterNode?.classList

    expect(checkClassList(classList, ['top', 'bottom', 'left', 'right', 'counter'], 'every')).toBe(true)
  })
})
