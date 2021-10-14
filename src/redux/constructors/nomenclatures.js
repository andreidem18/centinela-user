export function Nomenclatures(values){
    this.nomenclatures = [];

    values.forEach(value => {
        // Si no tiene la propiedad no habitable, significa que es un elemento de nomenclatura principal
        if(value.nomenclature_non_habitable) {

            let nomenclatureIndex = this.nomenclatures.findIndex(nomenclature => {
                return nomenclature.id === value.nomenclature_non_habitable.id;
            });
            if(nomenclatureIndex === -1){     // Si no existe, agregarla
                this.nomenclatures.push(new Nomenclature(value.nomenclature_non_habitable));
                nomenclatureIndex = this.nomenclatures.length - 1;
            }
            this.nomenclatures[nomenclatureIndex].values.push(new Value(value))
        }
    })
}


function Nomenclature(nomenclature){
    this.id = nomenclature.id;
    this.value = nomenclature.value;
    this.type = nomenclature.rel_type_unit.nomenclature_type.type;
    this.values = [];
}

function Value(value){
    this.id = value.id;
    this.value = value.value;
    this.type = value.rel_type_unit.nomenclature_type.type;
}


// Devolverá:
//  {
//      nomenclatures: [
//          {
//              id: 1,
//              value: "B",
//              type: "torre",
//              values: [
//                  {
//                      id: 6,
//                      value: 101,
//                      type: "Apartamento"
//                  }
//              ]
//          }
//      ]
//  }
