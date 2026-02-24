import { useOutletContext } from "react-router";
import { SustainableText } from "./Components/SustainableText";
import { AchievedSustainableGoals } from "./Components/AchievedSustainableGoals";
import { SectionHeading } from "../../Component/SectionHeading";

export function SustainablePg(){
    const appData = useOutletContext()

    const unGoals = appData?.unGoals

    // Check how many UN Goals S7 has achieved so far
    const achievedGoals = unGoals?.filter(unG => unG.pillars.length > 0)

    console.log(achievedGoals)

    return(
        <section
            className="md:py-10 md:px-20"
        >
            <SectionHeading 
                title={"UN Sustainable Goals"}
            />

            <SustainableText />

            <AchievedSustainableGoals 
                achievedGoals={achievedGoals}
            />
        </section>
    )
}