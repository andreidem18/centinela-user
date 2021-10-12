import { get, patch, post } from "utils";
import { setLoading } from ".";
import { Guests, Invitations } from '../constructors';

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
                dispatch(setGuests(new Guests(res.data.data)));
                dispatch(setInvitations(new Invitations(res.data.data)));
            })
            .finally(() => dispatch(setLoading(false)))
    }
}


export const deleteGuestThunk = id => {
    return dispatch => {
        dispatch(setLoading(true));
        return patch(`items/guests/${id}`, { favorite: 0 })
            .then(() => dispatch(getGuestsThunk()))
            .finally(() => setLoading(false))
    }
}


export const addGuestThunk = id => {
    return dispatch => {
        dispatch(setLoading(true));
        return patch(`items/guests/${id}`, { favorite: 1 })
            .then(() => dispatch(getGuestsThunk()))
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
            .finally(() => setLoading(false));
    }
}
