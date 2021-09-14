export const getCurrentDate = (days = 0, months = 0, years = 0) => {
    const d = new Date();
    const year = d.getFullYear();
    const month = d.getMonth();
    const day = d.getDate();
    let date = new Date(year + years, month + months, day + days);
    return date;
}