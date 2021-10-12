import { useDispatch, useSelector } from 'react-redux';
import { getResidencesThunk, getNomenclaturesThunk, removeNomenclatures } from 'redux/actions';
import { useError } from './error.hook';

export const useResidence = () => {
    const residences = useSelector(state => state.residences.residences);
    const nomenclatures = useSelector(state => state.residences.nomenclatures);
    const dispatch = useDispatch();

    const { error, handleError } = useError();
    

    const getResidences = () => { 
        try{ if(residences.length === 0 && !error) dispatch(getResidencesThunk()) } 
        catch(error){ handleError(error) }
    }

    const getNomenclatures = residenceId => { 
        try{ if(nomenclatures.length === 0 && !error) dispatch(getNomenclaturesThunk(residenceId)) } 
        catch(error){ handleError(error) }
    }

    const clearNomenclatures = () =>  nomenclatures.length && dispatch(removeNomenclatures()); 
    
    return { residences, nomenclatures, getResidences, getNomenclatures, clearNomenclatures }
}
