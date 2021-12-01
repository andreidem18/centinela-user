export const calculateDate = (date, days = 0, months = 0, years = 0) => {
    const d = new Date(date.getTime());
    console.log(d);
    const year = d.getFullYear();
    const month = d.getMonth();
    const day = d.getDate();
    return new Date(year + years, month + months, day + days, d.getHours(), d.getMinutes(), d.getSeconds());
}
// return new Date(date.setFullYear(date.getFullYear() + years), date.setMonth(date.getMonth() + months), date.setDate(date.getDate() + days));
