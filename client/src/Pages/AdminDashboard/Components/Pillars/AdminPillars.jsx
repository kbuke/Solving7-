import { useState } from "react"
import { AdminPopUpContents } from "../../../../Component/AdminPopUpContents"
import { PillarImg } from "../../../../Component/PillarImg"
import { PostSustainablePillar } from "./PostSustainablePillar"
import { useOutletContext } from "react-router"
import { DeleteSustainablePillar } from "./DeleteSustainablePillar"

export function AdminPillars({
    allPillars,
    setSelectedInstance, 
    setAction
}){
    // const [postSustainableGoal, setPostSustainableGoal] = useState(false)
    const [sustainableGoalAction, setSustainableGoalAction] = useState()
    const [selectedPillar, setSelectedPillar] = useState()
    const [selectedGoalId, setSelectedGoalId] = useState()
    const [selectedPillarId, setSelectedPillarId] = useState()

    console.log(sustainableGoalAction)

    const appData = useOutletContext()

    const allPillarGoals = appData?.allPillarGoals
    const setAllPillarGoals = appData?.setAllPillarGoals

    const unGoals = appData?.unGoals

    const setLoading = appData?.setLoading

    return(
        sustainableGoalAction === "post"
            ? <PostSustainablePillar 
                allPillarGoals={allPillarGoals}
                setAllPillarGoals={setAllPillarGoals}
                // postSustainableGoal={postSustainableGoal}
                // setPostSustainableGoal={setPostSustainableGoal}
                setSustainableGoalAction = {setSustainableGoalAction}
                unGoals={unGoals}
                selectedPillar={selectedPillar}
                setSelectedPillar={setSelectedPillar}
                setLoading={setLoading}
            />
            : sustainableGoalAction === "delete"
            ? <DeleteSustainablePillar 
                allPillarGoals={allPillarGoals}
                setAllPillarGoals={setAllPillarGoals}
                selectedGoalId={selectedGoalId}
                setSelectedGoalId={setSelectedGoalId}
                selectedPillarId={selectedPillarId}
                setSelectedPillarId={setSelectedPillarId}
                setSustainableGoalAction={setSustainableGoalAction}
            /> 
            : allPillars?.map((pillar, index) => {
                const pillarName = pillar?.name 
                const pillarId = pillar?.id 
                const pillarImg = PillarImg(pillarId)
                const pillarChallenge = pillar?.challenge
                const pillarOffering = pillar?.offering
                const pillarSuccess = pillar?.success

                //Relational 
                const pillarSustainableGoals = pillar?.sustainable_goals

                const renderSustainableGoals = () => {
                    return(
                        pillarSustainableGoals?.map((pSG, index) => {
                            console.log(pSG)
                            return(
                                <div
                                    key={index}
                                    className="flex gap-10 lg:text-xl mt-4 justify-around items-center"
                                >
                                    <p>
                                        Goal: {pSG?.id}
                                    </p>

                                    <p>
                                        {pSG?.goal}
                                    </p>

                                    <button
                                        className="px-2 bg-red-600 rounded text-white w-[30%] h-8 lg:w-[15%] cursor-pointer hover:-translate-y-2 duration-200"
                                        onClick={() => {
                                            setSelectedGoalId(pSG?.id)
                                            setSelectedPillarId(pillarId)
                                            setSustainableGoalAction("delete")
                                        }}
                                    >
                                        Delete
                                    </button>
                                </div>
                            )
                        })
                    )
                }

                return(
                    <AdminPopUpContents 
                        key={index}
                        instance={pillar}
                        instanceImg={pillarImg}
                        instanceName={pillarName}
                        instanceText={[
                            {
                                title: "Challenge",
                                text: pillarChallenge
                            },

                            {
                                title: "Offering",
                                text: pillarOffering
                            },

                            {
                                title: "Success",
                                text: pillarSuccess
                            }
                        ]}
                        relationInstances={renderSustainableGoals}
                        relationType={"Sustainability Goals"}
                        // setPostRelation={setPostSustainableGoal}
                        setPostRelation={setSustainableGoalAction}
                        setSelectedInstanceRelation={setSelectedPillar}
                        setSelectedInstance={setSelectedInstance}
                        setAction={setAction}
                    />
                )
            })
    )
}