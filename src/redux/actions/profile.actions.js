import { patch, post, remove } from "utils";
import { getUserThunk, handleError, setLoading } from ".";
import history from 'utils/history';


export const profileActions = {
    setProfile: "SET_PROFILE",
    removeProfile: "REMOVE_PROFILE"
}

export const setProfile = profile => ({ 
    type: profileActions.setProfile,
    payload: profile
});


export const removeProfile = () => ({type: profileActions.removeProfile})


export const deleteProfileThunk = id => {
    return dispatch => {
        dispatch(setLoading(true));
        return remove(`profiles/${id}/`)
            .then(() => dispatch(getUserThunk()))
            .catch(error => dispatch(handleError(error)))
            .finally(() => dispatch(setLoading(false)));
    }
}

export const selectProfileThunk = profile => {
    return dispatch => {
        dispatch(setLoading(true));
        return patch(`profiles/${profile.id}/`, {is_logged: true})
            .then(() => {
                localStorage.setItem('profile', profile.id);
                dispatch(setProfile(profile));
                history.push('/');
            })
            .catch(error => dispatch(handleError(error)))
            .finally(() => dispatch(setLoading(false)));
    }
}

export const removeProfileThunk = () => {
    return dispatch => {
        const profile = localStorage.getItem('profile')
        if(profile){
            dispatch(setLoading(true));
            return patch(`profiles/${profile}/`, {is_logged: false})
                .then(() => {
                    localStorage.setItem('profile', '');
                    dispatch(removeProfile());
                })
                .catch(error => dispatch(handleError(error)))
                .finally(() => dispatch(setLoading(false)));
        }
    }
}

export const createProfileThunk = data => {
    return dispatch => {
        dispatch(setLoading(true))
        return post('profiles/', data)
            .then(() => dispatch(getUserThunk()))
            .catch(error => dispatch(handleError(error)))
            .finally(() => dispatch(setLoading(false)));
    }
}

