import { formatDate } from "./formatDate"


export const getSpanishMonth = date => {
    const formattedDate = formatDate(date);
    return { day: formattedDate.day, month: months[formattedDate.month], year: formattedDate.year}
}

const months = [
    null, 'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 
    'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
]