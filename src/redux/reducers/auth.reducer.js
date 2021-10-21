import { authActions } from "redux/actions";

const initialState = {
    loginError: "",
    loggedUser: {
        id: 0, 
        email: "", 
        role: "", 
        residence: "",
        apartment: "",
        first_name: "", 
        last_name: ""
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
            const { id, email, role, apartment, residence, first_name, last_name } = action.payload;
            return{
                ...state, loggedUser: { id, email, role, apartment, residence, first_name, last_name }
            }
        case authActions.removeLoggedUser:
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