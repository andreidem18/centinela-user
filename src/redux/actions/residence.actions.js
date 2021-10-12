import { Nomenclatures } from "redux/constructors";
import { get } from "utils";
import { setLoading } from ".";


export const residenceActions = {
    setResidences: "SET_RESIDENCE",
    setNomenclatures: "SET_NOMENCLATURES",
    removeNomenclatures: "REMOVE_NOMENCLATURES"
}

export const setResidences = residences => ({
    type: residenceActions.setResidences,
    payload: residences
});

export const setNomenclatures = nomenclatures => ({
    type: residenceActions.setNomenclatures,
    payload: nomenclatures
})


export const removeNomenclatures = () => ({ type: residenceActions.removeNomenclatures })


export const getResidencesThunk = () => {
    return dispatch => {
        dispatch(setLoading(true));
        return get('items/residential_units?fields=*')
            .then(res => dispatch(setResidences(res.data.data)))
            .finally(() => dispatch(setLoading(false)));
    }
}

export const getNomenclaturesThunk = residenceId => {
    return dispatch => {
        dispatch(setLoading(true));
        return get(`items/nomenclatures_values?fields=*.*.*.*&filter[rel_type_unit.residential_unit]=${residenceId}&filter[status]=0`)
            .then(res => {
                const nomenclatures = new Nomenclatures(res.data.data);
                dispatch(setNomenclatures(nomenclatures.nomenclatures));
            })
            .finally(() => dispatch(setLoading(false)));
    }
}
