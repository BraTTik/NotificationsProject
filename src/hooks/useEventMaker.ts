import { useActions } from './useActions'
import { useCallback, useEffect } from 'react'
import { makeEvent, makeSetOfNewEvents } from '../utils/mockUtils'
import { useTypedSelector } from './useTypedSelector'

const DEFAULT_TIME = 10000// 10 secs
let timer: NodeJS.Timeout

export const useEventMaker = (ms: number = DEFAULT_TIME) => {
  const { addEvent, setNotifications } = useActions()
  const nearestEvent = useTypedSelector(state => state.notifications.notifications)[0]
  const date = nearestEvent?.date

  const addNewEvent = useCallback(() => {
    const event = makeEvent(date)
    addEvent(event)
  }, [addEvent, date])

  useEffect(() => {
    const events = makeSetOfNewEvents(5)
    setNotifications(events)
  }, [setNotifications])

  useEffect(() => {
    timer = setTimeout(() => {
      addNewEvent()
    }, ms)

    return () => clearTimeout(timer)
  }, [ms, addNewEvent])
}
