import { profileActions } from "redux/actions";

const initialState = {
    id: 0,
    name: "",
    phone_numbers: [],
    is_logged: true
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case profileActions.setProfile:
            const { id, name, phone_numbers, is_logged } = action.payload
            return {...state, id, name, phone_numbers, is_logged }

        case profileActions.quiteProfile:
            return initialState;
        
        default:
            return state;
    }
}

export default profileReducer;
