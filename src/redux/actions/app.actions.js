export const appActions = {
    addTitle: "ADD_TITLE",
    setLoading: "SET_LOADING",
    setInfoModal: "SET_INFO_MODAL",
    removeInfoModal: "REMOVE_INFO_MODAL"
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