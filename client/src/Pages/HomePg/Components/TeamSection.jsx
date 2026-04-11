import { SectionHeading } from "../../../Component/SectionHeading"

export function TeamSection({
    allTeams
}){

    return(
        <section
            className="home-section"
        >
            <SectionHeading 
                title={"Meet the Team"}
            />

            <div
                className="lg:grid lg:grid-cols-2 gap-10"
            >
                {allTeams?.map((team, index) => {
                    const isSingleMember = team?.members?.length === 1

                    return (
                        <div
                            key={index}
                            className={`mt-4 lg:mt-4 border-b lg:border-none ${isSingleMember ? "col-span-1" : "col-span-2"}`}
                        >
                            <h1 className="secondary-heading px-0 text-center lg:text-left text-2xl lg:text-4xl">
                            {team.name}
                            </h1>

                            <p
                                className="text-center lg:text-left mb-4"
                            >{team.info}</p>

                            <div className={`flex flex-col items-center lg:grid gap-10 ${isSingleMember ? "lg:grid-cols-1" : "lg:grid-cols-2"}`}>
                                {team.members?.map((member, i) => (
                                    <div key={i} className="lg:grid lg:grid-cols-2 lg:gap-4">
                                        <img 
                                            src={member?.img? member.img : `/EmployeeImg/${member?.name}.jpg`}
                                            alt={`${member?.name}-img`}
                                            className="h-60 lg:h-120 w-60 lg:w-80 rounded-full lg:rounded justify-self-center lg:justify-self-start"
                                        />

                                        <div>
                                            <h1
                                                className="uppercase text-3xl font-bold tracking-[4px] text-center lg:text-left mt-4 lg:mt-0"
                                            >
                                                {member?.name}
                                            </h1>

                                            <h1
                                                className="uppercase text-xl font-bold tracking-widest text-center lg:text-left"
                                            >
                                                {member?.position}
                                            </h1>

                                            <p
                                                className="text-lg mb-10 lg:mb-0"
                                            >
                                                {member?.intro}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}