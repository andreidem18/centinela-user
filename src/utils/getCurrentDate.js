export const getCurrentDate = (days = 0, months = 0, years = 0) => {
    const d = new Date();
    const year = d.getFullYear();
    const month = d.getMonth();
    const day = d.getDate();
    let date = new Date(year + years, month + months, day + days);
    date = date.toISOString().slice(0, 10).split('-');
    return {date: date[2], month: date[1], year: date[0]}
}