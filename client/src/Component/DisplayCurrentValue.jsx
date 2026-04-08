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
            const value = selectedInstance[accessor]

            // resetValues[key] = selectedInstance[accessor]
            resetValues[key] = value ?? ""
        })
        
        reset(resetValues)
    }, [selectedInstance, isPatch, reset])
}