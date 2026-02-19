import { useState } from "react"
import { AdminPopUpContents } from "../../../../Component/AdminPopUpContents"
import { PillarImg } from "../../../../Component/PillarImg"
import { PostSustainablePillar } from "./PostSustainablePillar"
import { useOutletContext } from "react-router"

export function AdminPillars({
    allPillars
}){
    const [postSustainableGoal, setPostSustainableGoal] = useState(false)
    const [selectedPillar, setSelectedPillar] = useState()

    const appData = useOutletContext()

    const allPillarGoals = appData?.allPillarGoals
    const setAllPillarGoals = appData?.setAllPillarGoals

    const unGoals = appData?.unGoals

    const setLoading = appData?.setLoading

    return(
        postSustainableGoal
            ? <PostSustainablePillar 
                allPillarGoals={allPillarGoals}
                setAllPillarGoals={setAllPillarGoals}
                postSustainableGoal={postSustainableGoal}
                setPostSustainableGoal={setPostSustainableGoal}
                unGoals={unGoals}
                selectedPillar={selectedPillar}
                setSelectedPillar={setSelectedPillar}
                setLoading={setLoading}
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
                        pillarSustainableGoals?.map((pSG, index) => (
                            <div
                                key={index}
                                className="flex gap-10 lg:text-xl"
                            >
                                <p>
                                    Goal: {pSG?.id}
                                </p>

                                <p>
                                    {pSG?.goal}
                                </p>
                            </div>
                        ))
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
                        setPostRelation={setPostSustainableGoal}
                        setSelectedInstance={setSelectedPillar}
                    />
                )
            })
    )
}