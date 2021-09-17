import { get } from "utils";
import { setLoading } from ".";

export const residenceActions = {
    setResidences: "SET_RESIDENCE"
}

export const setResidences = residences => ({
    type: residenceActions.setResidences,
    payload: residences
});


export const getResidencesThunk = () => {
    return dispatch => {
        dispatch(setLoading(true));
        return get('items/nomenclatures_values?fields=*.*.*')
            .then(res => { 
                const data = [];
                // Algoritmo para ordenar los valores, ya que desde la api no vienen ordenados
                // Desde la api vienen los valores de forma aleatoria (101, 304, 202)
                // aquí se ordenan así (residencia -> tipo de nomenclatura(ejm: apartamento) -> valor(101, 102, 103))
                res.data.data.forEach(v => {
                    const residence = v.rel_type_unit.residential_unit;
                    const type =  v.rel_type_unit.nomenclature_type;
                    let residencyIndex = data.findIndex(d => d.id === residence.id)
                    if(residencyIndex === -1){ // Si no existe la residencia, agregarla
                        data.push({
                            id: residence.id,
                            name: residence.name,
                            nomenclature: []
                        })
                        residencyIndex = data.length - 1;
                    }
                    let nomenclatureIndex = data[residencyIndex].nomenclature.findIndex(n => n.id === type.id)
                    if(nomenclatureIndex === -1){ // Si no existe la nomenclatura, agregarla
                        data[residencyIndex].nomenclature.push({
                            id: type.id,
                            type: type.type,
                            priority: v.rel_type_unit.priority,
                            values: []
                        })
                        nomenclatureIndex = data[residencyIndex].nomenclature.length - 1
                    }
                    // Se agrega el valor
                    data[residencyIndex].nomenclature[nomenclatureIndex].values.push({ id: v.id, value: v.value})
                })
                dispatch(setResidences(data))
            })
            .catch(error => console.log(error))
            .finally(() => dispatch(setLoading(false)));
    }
}
