export const fromDateToObject = date => {
    date = date.toISOString().slice(0, 10).split('-');
    return {date: date[2], month: date[1], year: date[0]}
}