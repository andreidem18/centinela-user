import { get } from "utils";
import { setLoading } from ".";


export const profileActions = {
    setProfile: "SET_PROFILE"
}

export const setProfile = profile => ({ 
    type: profileActions.setProfile,
    payload: profile
});


export const getProfilesThunk = () => {
    return dispatch => {
        dispatch(setLoading(true));
        return get('users/me')
            .then(res => console.log(res.data.data))
            .catch(error => error)
            .finally(() => dispatch(setLoading(false)))
    }
}
