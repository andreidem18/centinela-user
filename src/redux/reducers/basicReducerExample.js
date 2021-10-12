import { exampleActions } from "redux/actions";

const initialState = {
    id: 0,
    example: ""
}

const exampleReducer = (state = initialState, action) => {
    switch (action.type) {
        case exampleActions.setExample:
            const { id, name, phone_numbers, is_logged } = action.payload
            return {...state, id, name, phone_numbers, is_logged }
        
        default:
            return state;
    }
}

export default exampleReducer;

// Recordar añadirlo en el combine reducers(index de carpeta reducers)
