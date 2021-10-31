export const calculateDate = (date, days = 0, months = 0, years = 0) => {
    const d = new Date(date.getTime());
    const year = d.getFullYear();
    const month = d.getMonth();
    const day = d.getDate();
    const newDate = new Date(year + years, month + months, day + days);
    return newDate;
}
