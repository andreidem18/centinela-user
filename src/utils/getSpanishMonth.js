import { formatDate } from "./formatDate"


export const getSpanishMonth = date => {
    const formattedDate = formatDate(date);
    return { day: formattedDate.day, month: months[formattedDate.month], year: formattedDate.year}
}

const months = [
    null, 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 
    'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
]