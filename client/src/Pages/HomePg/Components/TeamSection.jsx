import { useState } from "react"
import { TeamsImg } from "../../../Component/TeamsImg"
import {PopUp} from "../../../Component/PopUp"
import { TeamPopUp } from "./TeamPopUp"
import { SectionHeading } from "../../../Component/SectionHeading"

export function TeamSection({
    allTeams
}){
    const [selectedTeam, setSelectedTeam] = useState()

    return(
        <section
            className="home-section"
        >
            <SectionHeading 
                title={"Meet the Team"}
            />

            <div
                className="lg:grid lg:grid-cols-3 gap-10 mt-10 px-4 mb-0 lg:mb-10 items-center justify-items-center"
            >
                {allTeams?.map((team, index) => {
                    const teamName = team?.name
                    return(
                        <div
                            key={index}
                            className="
                                rounded-xl flex flex-col text-center hover:-translate-y-2 duration-200 cursor-pointer
                                lg:h-80 lg:w-100 items-center text-white mt-4 lg:mt-0
                            "
                            onClick={() => setSelectedTeam(team)}
                        >
                            <img 
                                src={`/TeamImg/${teamName}.png`}
                                className="rounded-t-xl"
                            />

                            <div
                                className="flex justify-center items-center bg-[rgba(0,120,0,1)] w-full h-full rounded-b-lg"
                            >
                                <h1
                                    className="uppercase text-3xl py-4"
                                >
                                    {teamName}
                                </h1>
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