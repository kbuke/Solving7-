import { useState } from "react"
import { unGoalIcon } from "../../../Component/unGoalIcon"
import { SolutionPopUp } from "./SolutionPopUp"
import { PopUp } from "../../../Component/PopUp"
import { SectionHeading } from "../../../Component/SectionHeading"

export function AchievedSustainableGoals({
    achievedGoals
}){
    const [selectedGoal, setSelectedGoal] = useState()

    console.log(selectedGoal)

    return(
        <div
            className="mt-20"
        >
            <SectionHeading 
                title={"Achieved UN Goals"}
            />

            <div>
                <p
                    className="home-text"
                >
                    Solving 7 aligns its work with key United Nations Sustainable Development Goals (SDGs), ensuring measurable environmental, social, and economic impact.
                </p>

                <p
                    className="home-text"
                >
                    By integrating infrastructure, livelihoods, and behaviour change, Solving 7 delivers multi-SDG impact through a single circular ecosystem.
                </p>

                <p
                    className="home-text"
                >
                    Our model contributes directly to:
                </p>
            </div>

            <div
                className="grid grid-cols-2 lg:grid-cols-4 self-center justify-items-center gap-10 mt-10"
            >
                {achievedGoals?.map((aG, index) => {
                    const aGId = aG?.id
                    return(
                        <div 
                            key={index}
                            style={{backgroundImage: `url(${unGoalIcon(aGId)})`}}
                            className="bg-center bg-cover h-50 w-50 lg:h-60 lg:w-60 cursor-pointer hover:scale-110 duration-200"
                            onClick={() => setSelectedGoal(aG)}
                        />
                    )
                })}
            </div>

            {selectedGoal
                ? <PopUp>
                    <SolutionPopUp 
                        selectedGoal={selectedGoal}
                        setSelectedGoal={setSelectedGoal}
                    />
                </PopUp>
                : null
            }
        </div>
    )
}