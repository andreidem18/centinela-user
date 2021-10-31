import { calculateDate } from "utils";

export function Invitations(invitations){
    const today = new Date();
    const inactiveInvitations = [];
    const activeInvitations = [];

    invitations.forEach(invitation => {

        // Filtrado de invitaciones de acceso único (tipo 1)
        if(invitation.type === 1){
            const created_date = calculateDate(new Date(invitation.created_on), 1);

            // Si esta activa, y fue creada hace menos de un día, se agregará a invitaciones activas. De lo 
            // contrario, se agregará a las expiradas y se le cambia el status a 0 (inactivo)
            if(invitation.status === 1 && today <= created_date){
                activeInvitations.push(invitation);
            } else {
                invitation.status = 0;
                inactiveInvitations.push(invitation);
            }
        }


        // Filtrado de invitaciones de tipo especial (tipo 2, con intervalo de fecha)
        else if(invitation.type === 2){
            const start = new Date(invitation.date_start);
            const end = new Date(invitation.date_end+'T23:00:00');
            // Si las invitaciones se encuentran en su intérvalo de fecha, es decir, que estemos entre el inicio
            // y el final de esta invitación, esta se agregará a invitaciones activas. De lo contrario
            // pasará a invitaciones expiradas y se le cambia el status a 0 (inactivo)
            if(invitation.status === 1 && (start < today && end > today)){
                activeInvitations.push(invitation);
            } else {
                invitation.status = 0;
                inactiveInvitations.push(invitation);
            }
        }

    })
    
    // Las invitaciones se invierten para que se guarden por fecha de las más antiguas a las recientes. 
    // se colocan las activas y luego se les concatena las expiradas, para que las activas salgan primero
    return activeInvitations
                .reverse()
                .concat(inactiveInvitations.reverse());
}

