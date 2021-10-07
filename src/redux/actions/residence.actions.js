import { get } from "utils";
import { setLoading } from ".";
import { Residences } from '../constructors';

export const residenceActions = {
    setResidences: "SET_RESIDENCE"
}

export const setResidences = residences => ({
    type: residenceActions.setResidences,
    payload: residences
});


export const getResidencesThunk = () => {
    return dispatch => {
        dispatch(setLoading(true));
        return get('items/nomenclatures_values?fields=*.*.*')
            .then(res => { 
                const residences = new Residences(res.data.data);
                dispatch(setResidences(residences));
            })
            .catch(error => console.log(error))
            .finally(() => dispatch(setLoading(false)));
    }
}
