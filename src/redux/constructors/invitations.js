export function Invitations(invitations){
    const today = new Date();
    const inactiveInvitations = [];
    const activeInvitations = [];

    invitations.forEach(invitation => {

        if(invitation.status === 0) inactiveInvitations.push(invitation);

        // Este if se encargará de validar que las invitaciones que sean de tipo 
        // especial (tipo 2, con intervalo de fecha), estén en su rango de fecha. En caso de que no,
        // Pasará su status a inactivo(0) ya que por defecto su status siempre será activo (1)
        else if(invitation.type === 2){
            const start = new Date(invitation.date_start);
            const end = new Date(invitation.date_end+'T23:00:00')
            if(!(start < today && end > today)){
                invitation.status = 0;
                inactiveInvitations.push(invitation);
            } else activeInvitations.push(invitation);
        }

        else if(invitation.status === 1) activeInvitations.push(invitation);
    })
    
    // Las invitaciones se invierten para que se guarden por fecha de las más antiguas a las recientes. 
    // se colocan las activas y luego se les concatena las expiradas, para que las activas salgan primero
    return activeInvitations
                .reverse()
                .concat(inactiveInvitations.reverse());
}

