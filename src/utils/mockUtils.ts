import faker from 'faker'
import { NotificationType } from '../models/NotificationType'

const { hacker, date, datatype } = faker

const makeTitle = (): string => `${hacker.adjective()} ${hacker.noun()} ${hacker.verb()}`
const makeDate = (relativeDate?: Date): Date =>
  relativeDate ? date.between(new Date(), relativeDate) : date.past(1)

export const makeEvent = (date?: Date, title?: string): NotificationType => {
  return {
    id: datatype.uuid(),
    isNew: true,
    title: title || makeTitle(),
    date: makeDate(date)
  }
}

export const makeSetOfNewEvents = (amount: number): NotificationType[] => {
  let date: Date | undefined
  const list: NotificationType[] = []
  for (let i = 0; i < amount; i++) {
    const event = makeEvent(date)
    date = event.date
    list.unshift(event)
  }

  return list
}
