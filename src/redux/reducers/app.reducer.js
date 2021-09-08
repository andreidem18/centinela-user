import { appActions } from "redux/actions";

const initialState = {
    title: "",
    isLoading: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case appActions.addTitle:
            return{
                ...state,
                title: action.payload
            }
        case appActions.setLoading:
            return{
                ...state,
                isLoading: action.payload
            }
        default:
            return state;
    }
}

export default appReducer;
