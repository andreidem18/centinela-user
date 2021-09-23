export const getAvatar = (firstname, lastname) => {
    const colors = ['D5ED8B', 'FFA17A', 'FFCD7E', 'D6E2B3']
    const color = colors[Math.floor(Math.random()*4)]
    return `https://ui-avatars.com/api/?background=${color}&name=${firstname}${lastname ? '+'+lastname : ''}&color=fff`
}
