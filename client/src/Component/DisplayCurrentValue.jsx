import { useEffect } from "react";

export function DisplayCurrentValue(
    isPatch,
    instanceInputs,
    selectedInstance,
    reset
){
    useEffect(() => {
        if(!isPatch) return 

        const resetValues = {}

        instanceInputs.forEach(({key, accessor}) => {
            resetValues[key] = selectedInstance[accessor]
        })
        
        reset(resetValues)
    }, [selectedInstance, isPatch])
}