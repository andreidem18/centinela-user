export const formatStringTime = hour =>{
    let hours = hour.split(':')[0];
    let minutes = hour.split(':')[1];
    var ampm = hours >= 12 && hours < 24 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}
