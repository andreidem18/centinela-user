import { authActions } from "redux/actions";

const initialState = {
    loginError: "",
    loggedUser: {
        id: 0, 
        email: "", 
        name: "",
        role: "", 
        profiles: [],
        residence: "",
        apartment: "",
        is_premium: null
    }
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {

        case authActions.setLoginError:
            return{
                ...state,
                loginError: action.payload
            }

        case authActions.setLoggedUser:
            const { id, email, role, apartment, residence, profiles, is_premium } = action.payload;
            return{
                ...state, loggedUser: { id, email, role, apartment, residence, profiles, is_premium }
            }
        case authActions.quitLoggedUser:
            return{
                ...state, loggedUser: initialState.loggedUser
            }

        case authActions.removeProfile:
            return{
                ...state, name: ""
            }
        default:
            return state;
    }
}

export default authReducer;