import { useState } from "react"
import { TeamsImg } from "../../../Component/TeamsImg"
import {PopUp} from "../../../Component/PopUp"
import { TeamPopUp } from "./TeamPopUp"

export function TeamSection({
    allTeams
}){
    const [selectedTeam, setSelectedTeam] = useState()

    console.log(selectedTeam)

    return(
        <section
            className="home-section"
        >
            <h1
                className="
                    text-6xl uppercase tracking-[6px]
                "
            >
                Meet the Team
            </h1>

            <div
                className="lg:grid lg:grid-cols-3 gap-10 mt-10 px-4 mb-10"
            >
                {allTeams?.map((team, index) => {
                    const teamName = team?.name
                    return(
                        <div
                            style={{backgroundImage: `url(${`/TeamImg/${teamName}.png`})`}}
                            className="
                                w-full h-50 border lg:border-none lg:h-80 bg-no-repeat bg-center bg-cover rounded flex flex-col justify-center items-center
                                cursor-pointer hover:-translate-y-2 duration-200 mt-4 lg:mt-0
                            "
                            key={index}
                            onClick={() => setSelectedTeam(team)}
                        >
                            <div
                                className="bg-black/80 text-white w-[80%] h-20 rounded flex justify-center items-center text-2xl uppercase"
                            >
                                {teamName}
                            </div>
                        </div>
                    )
                })}
            </div>

            {selectedTeam
                ? <PopUp >
                    <TeamPopUp 
                        selectedTeam={selectedTeam}
                        setSelectedTeam={setSelectedTeam}
                    />
                </PopUp>
                : null
            }
        </section>
    )
}