import { residenceActions } from "redux/actions";

const initialState = { residences: [] }

const residenceReducer = (state = initialState, action) => {
    switch (action.type) {
        case residenceActions.setResidences:
            return {...state, residences: action.payload}
        
        default:
            return state;
    }
}

export default residenceReducer;