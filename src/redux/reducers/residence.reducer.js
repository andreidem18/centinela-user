import { residenceActions } from "redux/actions";

const initialState = { residences: [], nomenclatures: [] }

const residenceReducer = (state = initialState, action) => {
    switch (action.type) {
        case residenceActions.setResidences:
            return { ...state, residences: action.payload }

        case residenceActions.setNomenclatures:
            return { ...state, nomenclatures: action.payload}

        case residenceActions.removeNomenclatures:
            return { ...state, nomenclatures: []}
        
        default:
            return state;
    }
}

export default residenceReducer;