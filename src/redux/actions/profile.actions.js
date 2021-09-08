export const profileActions = {
    setProfile: "SET_PROFILE"
}

export const setProfile = profile => ({ 
    type: profileActions.setProfile,
    payload: profile
});