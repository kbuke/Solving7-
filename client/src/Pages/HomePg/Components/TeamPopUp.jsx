import { EmployeeImg } from "../../../Component/EmployeeImg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons"

export function TeamPopUp({
    selectedTeam,
    setSelectedTeam
}){
    const teamName = selectedTeam?.name
    const teamInfo = selectedTeam?.info
    const teamMembers = selectedTeam?.members
    return(
        <div
            className="bg-white h-[90%] w-[80%] rounded-xl px-8 lg:px-20 overflow-y-auto"
        >
            <div
                className="border-b border-black/60 py-4 flex justify-between items-center"
            >
                <h1
                    className="uppercase text-3xl lg:text-6xl"
                >
                    {teamName} Team
                </h1>

                <FontAwesomeIcon 
                    icon={faCircleXmark}
                    className="text-3xl lg:text-5xl rounded-full text-red-600/80 lg:cursor-pointer"
                    onClick={() => setSelectedTeam()}
                />
            </div>

            <p
                className="mt-3 font-bold text-lg lg:text-3xl lg:px-20"
            >
                {teamInfo}
            </p>

            <h2
                className="mt-4 uppercase text-xl lg:text-4xl lg:mt-10"
            >
                Members
            </h2>

            {teamMembers?.map((member, index) => {
                const employeeName = member?.name
                const employeeInfo = member?.intro
                const employeePosition = member?.position
                return(
                    <div
                        key={index}
                        className="grid grid-cols-[1fr_3fr] mt-4 gap-4 py-3 lg:py-4 border-b border-black/40"
                    >
                        <img 
                            src={EmployeeImg(employeeName)}
                            className="
                                rounded-full h-20 w-20
                                lg:h-60 lg:w-60
                            "
                        />

                        <div>
                            <h1
                                className="text-xl font-bold lg:text-3xl uppercase"
                            >
                                {employeeName}
                            </h1>

                            <h1
                                className="
                                    lg:text-2xl lg:mt-4 font-bold
                                "
                            >
                                {employeePosition}
                            </h1>

                            <p
                                className="lg:mt-4 lg:text-2xl"
                            >
                                {employeeInfo}
                            </p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}