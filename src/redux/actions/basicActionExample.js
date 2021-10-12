import { get } from "utils";
import { setLoading } from ".";


export const exampleActions = {
    setExample: "SET_EXAMPLE"
}

export const setExample = example => ({ 
    type: exampleActions.setExample,
    payload: example
});


export const getExamplesThunk = () => {
    return dispatch => {
        dispatch(setLoading(true));
        return get('example')
            .then(res => console.log(res.data.data))
            .catch(error => error)
            .finally(() => dispatch(setLoading(false)))
    }
}
