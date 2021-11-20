import { residenceActions } from "redux/actions";

const initialState = { residences: [], apartments: [] }

const residenceReducer = (state = initialState, action) => {
    switch (action.type) {
        case residenceActions.setResidences:
            return { ...state, residences: action.payload }

        case residenceActions.setApartments:
            return { ...state, apartments: action.payload}

        case residenceActions.removeApartments:
            return { ...state, apartments: []}
        
        default:
            return state;
    }
}

export default residenceReducer;