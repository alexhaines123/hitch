import dayjs from 'dayjs';

const DATE_FORMAT = 'DD/MM/YYYY'
const TIME_FORMAT = 'HH:MM'

export const formatISOStringDate = (date: string): string => {
  return dayjs(date).format(DATE_FORMAT)
}

export const formatISOStringTime = (date: string): string => {
  return dayjs(date).format(TIME_FORMAT)
}