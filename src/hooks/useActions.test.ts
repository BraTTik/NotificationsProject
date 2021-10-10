import { renderHook } from '@testing-library/react-hooks'
import { useActions } from './useActions'
import { ActionCreators } from 'store/reducers/actions'
import { getObjectKeys } from '../utils/getObjectKeys'

const actionCreatorsSetNames = getObjectKeys(ActionCreators)
const mockDispatch = jest.fn()
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch
}));

describe('useActions tests', () => {
  test('expect to be in the list and be a function', () => {
    const { result } = renderHook(useActions)
    const actionNames = getObjectKeys(result.current)

    actionNames.forEach(actionName => {
      expect(actionCreatorsSetNames.includes(actionName)).toBe(true)
      result.current[actionName]({} as never)
    })

    expect(mockDispatch).toBeCalledTimes(actionNames.length)
  })
})
