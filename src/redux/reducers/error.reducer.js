import { errorActions } from "redux/actions";

const initialState = false

const errorReducer = (state = initialState, action) => {
    switch (action.type) {
        case errorActions.setError:
            return true;
        
        default:
            return state;
    }
}

export default errorReducer;
