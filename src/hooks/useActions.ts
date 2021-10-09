import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators } from 'store/reducers/actions'
import { useMemo } from 'react'

export const useActions = () => {
  const dispatch = useDispatch()

  return useMemo( () => bindActionCreators(ActionCreators, dispatch), [dispatch])
}
