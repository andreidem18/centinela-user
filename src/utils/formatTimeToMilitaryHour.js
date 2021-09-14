export const formatTimeToMilitaryHour = (hour, moment) => {
    let hours = hour.split(':')[0];
    let minutes = hour.split(':')[1];
    if(moment === 'pm') hours = parseInt(hours) + 12;
    return hours + ':' + minutes;
}
