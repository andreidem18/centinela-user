import { authActions } from "redux/actions";

const initialState = {
    id: 0, 
    email: "", 
    role: "", 
    residence: "",
    apartment: "",
    profiles: []
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {

        case authActions.setLoggedUser:
            const { id, email, role, apartment, residence, profiles } = action.payload;
            return{
                id, email, role, apartment, residence, profiles
            }
        case authActions.removeLoggedUser:
            return initialState

        case authActions.removeProfile:
            return{
                ...state, name: ""
            }
        default:
            return state;
    }
}

export default authReducer;