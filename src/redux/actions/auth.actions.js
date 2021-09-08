export const authActions = {
    setLoginError: "SET_LOGIN_ERROR",
    setLoggedUser: "SET_LOGGED_USER",
    quitLoggedUser: "QUIT_LOGGED_USER",
    removeProfile: "REMOVE_PROFILE"
}


export const setLoginError = error => ({ 
    type: authActions.setLoginError,
    payload: error
});

export const setLoggedUser = user => ({ 
    type: authActions.setLoggedUser,
    payload: user
});



export const quitLoggedUser = () => ({ type: authActions.quitLoggedUser });

export const removeProfile = () => ({ type: authActions.removeProfile });
