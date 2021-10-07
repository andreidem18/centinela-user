// La api trae los valores desordenados (ejm: 101, 403, 204) 
// Este constructor ordenará esos valores dependiendo de su residencia y su nomenclatura 
// ejm: residencia: "sol alegre" -> nomenclatura: "apartamento" -> valor: 101

export function Residences(values){
    const residences = [];

    values.forEach(value => {
        const residence = value.rel_type_unit.residential_unit;
        const type =  value.rel_type_unit;

        let residencyIndex = residences.findIndex(d => d.id === residence.id);
        if(residencyIndex === -1){ // Si no existe la residencia, agregarla
            residences.push(new Residence(residence));
            residencyIndex = residences.length - 1;
        }
        let nomenclatureIndex = residences[residencyIndex].nomenclature.findIndex(n => n.id === type.id);
        if(nomenclatureIndex === -1){ // Si no existe la nomenclatura, agregarla
            residences[residencyIndex]
                .nomenclature
                .push(new Nomenclature(type.nomenclature_type, type.priority));
            nomenclatureIndex = residences[residencyIndex].nomenclature.length - 1;
        }
        residences[residencyIndex]
            .nomenclature[nomenclatureIndex]
            .values
            .push(new Value(value))
    })
    return residences;
}

function Residence(data){
    this.id = data.id;
    this.name = data.name;
    this.nomenclature = []
}

function Nomenclature(type, priority){
    this.id = type.id;
    this.type = type.type;
    this.priority = priority;
    this.values = [];
}

function Value(data){
    this.id = data.id;
    this.value = data.value;
}
