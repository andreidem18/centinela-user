export const appActions = {
    addTitle: "ADD_TITLE",
    setLoading: "SET_LOADING",
    setInfoModal: "SET_INFO_MODAL",
    removeInfoModal: "REMOVE_INFO_MODAL",
}

// Config es un objeto con lo siguiente 
// { type: 'success, error, warning', autoClose: true, showingTime: 2000, actionModal: () => {}, title: '', message: '' }
export const showInfoModal = config => {
    return dispatch => {
        config.handleClose = () => dispatch(removeInfoModal());
        dispatch(setInfoModal(config));
    }
}

export const addTitle = title => ({
    type: appActions.addTitle,
    payload: title
});


                       // loading será un boolean
export const setLoading = loading => ({ 
    type: appActions.setLoading,
    payload: loading
})

export const setInfoModal = (config, dispatch) => ({
    type: appActions.setInfoModal,
    payload: config
})

export const removeInfoModal = () => ({type: appActions.removeInfoModal})