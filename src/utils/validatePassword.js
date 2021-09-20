export const validatePassword = password => {
    let value = 0
    if(password.length >= 8){
        value++;
        if(password.split('').find(c => c === c.toUpperCase() && c.match(/[a-z]/i))
            && password.split('').find(c => c === c.toLowerCase() && c.match(/[a-z]/i)))    value++;
        if(/\d/.test(password))                                                             value++;
        if(/[a-zA-Z]/.test(password))                                                       value++;
    }

    switch (value) {
        case 4:
            return { number: value, color: "#008000", description: "Muy Segura"};
        case 3:
            return { number: value, color: "#33ff33", description: "Segura"};
        case 2:
            return { number: value, color: "#fff700", description: "Débil"};
        default:
            return { number: 1, color: "#ff3b00", description: "Muy Débil"};
    }
}