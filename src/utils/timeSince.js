export const timeSince = (date) => {

    let seconds = Math.floor((new Date() - date) / 1000);
  
    let interval = seconds / 31536000;
  
    if (interval > 1) {
      const number = Math.floor(interval)
      return "hace " + number + ` ${number === 1 ? 'año' : 'años'}`;
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      const number = Math.floor(interval)
      return "hace " + number + ` ${number === 1 ? 'mes' : 'meses'}`;
    }
    interval = seconds / 86400;
    if (interval > 1) {
      const number = Math.floor(interval)
      return "hace " + number + ` ${number === 1 ? 'día' : 'días'}`;
    }
    interval = seconds / 3600;
    if (interval > 1) {
      const number = Math.floor(interval)
      return "hace " + number + ` ${number === 1 ? 'hora' : 'horas'}`;
    }
    interval = seconds / 60;
    if (interval > 1) {
      const number = Math.floor(interval)
      return "hace " + number + ` ${number === 1 ? 'minuto' : 'minutos'}`;
    }
    return "hace " + Math.floor(seconds) + " segundos";
}