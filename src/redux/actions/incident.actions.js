export const incidentActions = {
    addIncidentTitle: "ADD_INCIDENT_TITLE",
    addIncidentDescription: "ADD_INCIDENT_DESCRIPTION",
    addStep: "ADD_STEP"
}


export const addIncidentTitle = title => ({
    type: incidentActions.addIncidentTitle,
    payload: title
});

export const addIncidentDescription = description => ({ 
    type: incidentActions.addIncidentDescription,
    payload: description
})

export const addStep = step => ({
    type: incidentActions.addStep,
    payload: step
})
