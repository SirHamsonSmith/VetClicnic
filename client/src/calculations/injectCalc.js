const calcInjectble = (medication, patient) => {
    let med = medication.injectable
    let kg = patient.weight / 2.2
    let dose = {mL: 0,
                low: 0,
                hi: 0}

    if (patient.species === "canine") {
        if (med.doseCanine != 0) {
            dose.mL = (med.doseCanine * kg / med.concentration).toFixed(2)
        } 
        
        if (med.doseRangeCanine[0] != 0) {
            dose.low = (med.doseRangeCanine[0] * kg /med.concentration).toFixed(2)
            dose.hi = (med.doseRangeCanine[1] * kg /med.concentration).toFixed(2) 
        }
    } 
    
    if (patient.species === "feline") {
        if (med.doseFeline != 0) {
            dose.mL = (med.doseFeline * kg / med.concentration).toFixed(2)
        }

        if (med.doseRangeFeline[0] != 0) {
            dose.low = (med.doseRangeFeline[0] * kg / med.concentration).toFixed(2)
            dose.hi = (med.doseRangeFeline[1] * kg / med.concentration).toFixed(2)
        }
    }
    return dose
    }

module.exports = calcInjectble;
