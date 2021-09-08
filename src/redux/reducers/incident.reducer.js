import { incidentActions } from "redux/actions";

const initialState = {
    title: "",
    description: "",
    step: 1
}

const incidentReducer = (state = initialState, action) => {
    switch (action.type) {
        case incidentActions.addIncidentTitle:
            return{
                ...state,
                title: action.payload
            }
        case incidentActions.addIncidentDescription:
            return{
                ...state,
                description: action.payload
            }
        case incidentActions.addStep:
            return{
                ...state,
                step: action.payload
            }
        default:
            return state;
    }
}

export default incidentReducer;