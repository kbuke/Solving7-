import { useOutletContext } from "react-router"
import { SectionHeading } from "../../Component/SectionHeading"
import { Link } from "react-router"

export function PillarsPg(){
    const appData = useOutletContext()

    const allPillars = appData?.allPillars

    const screenWidth = appData?.screenWidth

    return(
        <section
            className="mt-4 px-10"
        >
            <SectionHeading 
                title="Pillars"
            />

            <p
                className="mt-4 text-xl"
            >
                Solving 7 addresses <span className="font-bold">seven</span> interconnected challenges facing communities across South Africa. Each pillar is both a standalone intervention and part of a larger circular ecosystem.
            </p>

            <div
                className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-6"
            >
                {allPillars?.map((pillar, index) => {
                    console.log(pillar)
                    const pillarName = pillar?.name 
                    const pillarId = pillar?.id

                    return(
                        <Link
                            className="bg-black/90 rounded hover:cursor-pointer hover:-translate-y-2 duration-200"
                            to={`/pillars/${pillarId}`}
                        >
                            <img 
                                src={`/pillarLogos/${pillarId}.png`}
                                className="rounded-t"
                            />

                            <h1
                                className="text-white text-xl text-center"
                            >
                                <span className="font-bold uppercase tracking-widest">Pillar {pillarId}: </span>{pillarName}
                            </h1>
                        </Link>
                    )
                })}
            </div>
        </section>
    )
}