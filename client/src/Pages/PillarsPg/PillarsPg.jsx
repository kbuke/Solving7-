import { useOutletContext } from "react-router"
import { PillarInfo } from "./Components/PillarIfo"

export function PillarsPg(){
    const appData = useOutletContext()

    const allPillars = appData?.allPillars

    const screenWidth = appData?.screenWidth

    console.log(allPillars)
    return(
        <section
            className="mt-4 px-10"
        >
            <h1
                className="
                    text-6xl uppercase tracking-[6px]
                "
            >
                Pillars
            </h1>

            <p
                className="mt-4 text-xl"
            >
                Solving 7 addresses <span className="font-bold">seven</span> interconnected challenges facing communities across South Africa. Each pillar is both a standalone intervention and part of a larger circular ecosystem.
            </p>

            <PillarInfo 
                allPillars={allPillars}
                screenWidth={screenWidth}
            />
        </section>
    )
}