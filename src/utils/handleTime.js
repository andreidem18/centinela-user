export const handleTime = (date, time, action) => {
    const hours = parseInt(time?.split(':')[0])
    const minutes = parseInt(time?.split(':')[1])
    const dt = new Date(date.getTime());
    if(action === 'add'){
        dt.setHours( dt.getHours() + hours)
        dt.setMinutes( dt.getMinutes() + minutes)
    }
    if(action === 'substract'){
        dt.setHours( dt.getHours() - hours)
        dt.setMinutes( dt.getMinutes() - minutes)
    }
    return dt;
}
