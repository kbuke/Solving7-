import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons"
import { useDelete } from "../../../../CustomHooks/useDelete"
import { useForm } from "react-hook-form"

export function DeleteSustainablePillar({
    allPillarGoals,
    setAllPillarGoals,
    selectedGoalId,
    setSelectedGoalId,
    selectedPillarId,
    setSelectedPillarId,
    setSustainableGoalAction
}){
    const {
        handleSubmit,
        formState: {errors}
    } = useForm()

    const [selectedPillarGoal, setSelectedPillarGoal] = useState()

    useEffect(() => (
        setSelectedPillarGoal(allPillarGoals.filter(pg => pg.sustainable_id === selectedGoalId && pg.pillar_id === selectedPillarId))
    ), [])

    console.log(selectedPillarGoal)

    const deleteInstanceId = selectedPillarGoal?.[0].id

    const handleDeletePillarGoal = () => {
        useDelete(
            `/api/sustainablepillar/${deleteInstanceId}`,
            setAllPillarGoals,
            deleteInstanceId,
            setSustainableGoalAction
        )
    }

    return(
        <form
            onSubmit={handleSubmit(handleDeletePillarGoal)}
        >
            <div className="flex gap-4 px-4 py-2 items-center border-b border-dashed">
                <FontAwesomeIcon
                    icon={faChevronCircleLeft}
                    className="text-2xl text-blue-600"
                    onClick={() => {
                        setSustainableGoalAction()
                        setSelectedGoalId()
                        setSelectedPillarId()
                    }}
                />

                <h1 className="text-2xl uppercase">Delete</h1>
            </div>

            <div
                className="flex justify-center mt-4"
            >
                <button
                    type="submit"
                    className="bg-red-600/80 px-4 w-[40%] h-12 uppercase text-white rounded"
                >
                    Delete
                </button>
            </div>
        </form>
    )
}