import { guestActions } from "redux/actions";

const initialState = {}

const guestReducer = (state = initialState, action) => {
    switch (action.type) {
        case guestActions.setGuests:
            return { ...state, guests: action.payload }

        case guestActions.setInvitations:
            return { ...state, invitations: action.payload}

        case guestActions.clearGuestAndInvitations:
            return initialState;
        
        default:
            return state;
    }
}

export default guestReducer;