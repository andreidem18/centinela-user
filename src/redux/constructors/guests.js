export function Guests(invitations){
    const guests = [];
    invitations.forEach(invitation => {
        // Si el invitado es favorito, y no se ha guardado en guests, agregarlo
        if(invitation.guest.favorite === 1 && !guests.find(g => g.id === invitation.guest.id)){
            guests.push(invitation.guest);
        }
    });
    return guests;
}