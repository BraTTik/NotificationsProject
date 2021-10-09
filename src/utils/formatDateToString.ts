import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)
dayjs.locale('ru')

export const formatDateToString = (date: Date): string => {
  return dayjs().to(dayjs(date))
}
