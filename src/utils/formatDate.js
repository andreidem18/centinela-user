export const formatDate = date => {
    if(!date) return;
    const month = date.getUTCMonth() + 1; //months from 1-12
    const day = date.getUTCDate();
    const year = date.getUTCFullYear();
    
    return { day, month, year };
}