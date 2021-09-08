import { useCallback } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { addIncidentTitle, addIncidentDescription, addStep } from "redux/actions";

export const useIncident = () => {
    const dispatch = useDispatch();
    const incidentTitle = useSelector(state => state.incident.title);
    const incidentDescription = useSelector(state => state.incident.description);
    const step = useSelector(state => state.incident.step);

    const setIncidentTitle = e => {
        dispatch(addIncidentTitle(e.target.value));
    }

    const setIncidentDescription = e => {
        dispatch(addIncidentDescription(e.target.value));
    }

    const setStep = useCallback(step => {
        dispatch(addStep(step))
    }, [dispatch]);

    const resetForm = () => {
        dispatch(addIncidentTitle(''));
        dispatch(addIncidentDescription(''));
        setStep(1);
    }


    return { incidentTitle, setIncidentTitle, incidentDescription, setIncidentDescription, step, setStep, resetForm }
}