import { formatDate } from "./formatDate"


export const getSpanishMonth = date => {
    const formattedDate = formatDate(date).split('/');
    return { day: formattedDate[0], month: months[formattedDate[1]], year: formattedDate[2]}
}

const months = [
    null, 'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 
    'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
]