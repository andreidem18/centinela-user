import { notTokenGet } from "utils";
import { setLoading } from ".";


export const residenceActions = {
    setResidences: "SET_RESIDENCE",
    setApartments: "SET_APARTMENTS",
    removeApartments: "REMOVE_APARTMENTS"
}

export const setResidences = residences => ({
    type: residenceActions.setResidences,
    payload: residences
});

export const setApartments = apartments => ({
    type: residenceActions.setApartments,
    payload: apartments
})


export const removeApartments = () => ({ type: residenceActions.removeApartments })


export const getResidencesThunk = () => {
    return dispatch => {
        dispatch(setLoading(true));
        return notTokenGet('residences/')
            .then(res => dispatch(setResidences(res.data)))
            .finally(() => dispatch(setLoading(false)));
    }
}

export const getApartmentsThunk = residenceId => {
    return dispatch => {
        dispatch(setLoading(true));
        return notTokenGet(`residences/${residenceId}/not_taken_apartments/`)
            .then(res => {
                dispatch(setApartments(res.data));
            })
            .finally(() => dispatch(setLoading(false)));
    }
}

