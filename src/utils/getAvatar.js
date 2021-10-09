export const getAvatar = (firstname, lastname) => {
    const colors = ['D5ED8B', 'FFA17A', 'FFCD7E', 'FFC864', 'A687DE']
    const color = colors[Math.floor(Math.random()*5)]
    return `https://ui-avatars.com/api/?background=${color}&name=${firstname}${lastname && `+${lastname}`}&color=fff`
}
