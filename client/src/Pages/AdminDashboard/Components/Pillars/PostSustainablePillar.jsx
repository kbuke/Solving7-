import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons"
import { useForm } from "react-hook-form"
import { Controller } from "react-hook-form";
import { usePost } from "../../../../CustomHooks/usePost";

export function PostSustainablePillar({
    allPillarGoals,
    setAllPillarGoals,
    postSustainableGoal, 
    // setPostSustainableGoal,
    setSustainableGoalAction,
    unGoals,
    selectedPillar,
    setSelectedPillar,
    setLoading
}){
    const {
        register,
        handleSubmit,
        control,
        formState: { errors }
    } = useForm()

    const pillarName = selectedPillar?.name
    const pillarId = selectedPillar?.id
    const pillarGoals = selectedPillar?.sustainable_goals 


    //Ensure only options not yet chosen are available.
    const availablePillarOptions = unGoals
        ?.filter(goal =>
            !pillarGoals?.some(
                assignedGoal => assignedGoal.id === goal.id
            )
        )
        ?.map(goal => ({
            label: goal.goal,
            value: goal.id
    }))


    const handlePillarGoalPost = (formData) => {
        const postData = {
            pillarId: pillarId,
            sustainableId: formData?.pillarGoals
        }
        usePost({
            url: "/api/sustainablepillar",
            body: postData,
            credentials: "include",
            setLoading: setLoading,
            onSuccess: (newPillarGoal) => {
                setAllPillarGoals(prev => [...prev, newPillarGoal])
                setSelectedPillar()
                setSustainableGoalAction(false)
            }
        })
    }

    return(
        <form
            onSubmit={handleSubmit(handlePillarGoalPost)}
        >
            <div className="flex gap-4 px-4 py-2 items-center border-b border-dashed">
                <FontAwesomeIcon
                    icon={faChevronCircleLeft}
                    className="text-2xl text-blue-600 cursor-pointer"
                    onClick={() => {
                        setSustainableGoalAction(false)
                        setSelectedPillar()
                    }}
                />

                <h1 className="text-2xl uppercase">Add New Goal for {pillarName}</h1>
            </div>

            <div
                className="flex justify-center mt-4"
            >
                <Controller 
                    name={"pillarGoals"}
                    control={control}
                    render={({field}) => (
                        <select
                            {...field}
                            className="border rounded lg:h-16 text-center lg:text-2xl"
                        >
                            <option
                                value=""
                            >
                                Select a UN Goal
                            </option>

                            {availablePillarOptions.map((option, index) => (
                                <option
                                    key={index}
                                    value={option.value}
                                    className=""
                                >
                                    {option?.label}
                                </option>
                            ))}
                        </select>
                    )}
                />
            </div>

            <div
                className="flex justify-center lg:mt-10"
            >
                <button
                    className="bg-green-600/80 cursor-pointer text-white px-4 rounded hover:-translate-y-2 duration-200 lg:h-16 lg:w-[20%] lg:text-4xl uppercase"
                >
                    Submit
                </button>
            </div>
        </form>
    )
}