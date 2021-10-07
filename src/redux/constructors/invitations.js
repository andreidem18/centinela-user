export function Invitations(invitations){
    const activeInvitations = invitations.filter(invitation => invitation.status === 1);
    const expiredInvitations = invitations.filter(invitation => invitation.status === 0);
    
    // Las invitaciones se invierten para que se guarden por fecha de las más antiguas a las recientes. 
    // se colocan las activas y luego se les concatena las expiradas, para que las activas salgan primero
    return activeInvitations
                .reverse()
                .concat(expiredInvitations.reverse());
}

