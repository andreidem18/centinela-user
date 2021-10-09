import { formatDate } from './formatDate'

export const formatDateString = date => {
    if(!date) return;
    const dateObj = formatDate(date)
    return `${dateObj.day}/${dateObj.month}/${dateObj.year}`
}