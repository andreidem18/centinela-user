export function withoutTime(dateTime) {
    if(!dateTime) return null;
    var date = new Date(dateTime.getTime());
    date.setHours(0, 0, 0, 0);
    return date;
}