import { get, patch, post } from "utils";
import { setLoading } from ".";

export const guestActions = {
    setGuests: "SET_GUESTS",
    setInvitations: "SET_INVITATIONS",
    clearGuestAndInvitations: "CLEAR_GUESTS_AND_INVITATIONS"
}

export const setGuests = guests => ({ 
    type: guestActions.setGuests,
    payload: guests
});

export const setInvitations = invitations => ({
    type: guestActions.setInvitations,
    payload: invitations
})

export const clearGuestAndInvitations = () => ({ type: guestActions.clearGuestAndInvitations })

export const getGuestsThunk = () => {
    return dispatch => {
        dispatch(setLoading(true));
        return get(`items/guest_code_unique?filter[user]=${localStorage.getItem('user_id')}&fields=*,guest.*`)
            .then(res => {
                const guests = [];
                const invitations = [];
                res.data.data.forEach(invitation => {
                    if(!guests.find(g => g.id === invitation.guest.id) && invitation.guest.favorite === 1){
                        guests.push(invitation.guest);
                    }
                    if(invitation.status) invitations.push(invitation);
                });
                const expiredInvitations = res.data.data.filter(invitation => invitation.status === 0);
                dispatch(setGuests(guests));
                // Para que aparezcan primero las invitaciones activas
                dispatch(setInvitations(
                    invitations.reverse().concat(expiredInvitations.reverse())
                ));
            })
            .catch(error => error)
            .finally(() => dispatch(setLoading(false)))
    }
}


export const deleteGuestThunk = id => {
    return dispatch => {
        dispatch(setLoading(true));
        return patch(`items/guests/${id}`, { favorite: 0 })
            .then(() => dispatch(getGuestsThunk()))
            .catch(error => error)
            .finally(() => setLoading(false))
    }
}


export const addGuestThunk = id => {
    return dispatch => {
        dispatch(setLoading(true));
        return patch(`items/guests/${id}`, { favorite: 1 })
            .then(() => dispatch(getGuestsThunk()))
            .catch(error => error)
            .finally(() => setLoading(false))
    }
}

export const createInvitationThunk = data => {
    return dispatch => {
        dispatch(setLoading(true));
        return post('items/guest_code_unique', data)
            .then(res => {
                dispatch(getGuestsThunk());
                return res;
            })
            .catch(error => error)
            .finally(() => setLoading(false));
    }
}
