import { useOutletContext } from "react-router";
import { SustainableText } from "./Components/SustainableText";
import { AchievedSustainableGoals } from "./Components/AchievedSustainableGoals";
import { SectionHeading } from "../../Component/SectionHeading";

export function SustainablePg(){
    const appData = useOutletContext()

    const unGoals = appData?.unGoals

    // Check how many UN Goals S7 has achieved so far
    const achievedGoals = unGoals?.filter(unG => unG.pillars.length > 0)

    return(
        <section
            className="mt-14 lg:mt-0 "
        >
            <SectionHeading 
                title={"UN Sustainable Goals"}
                additionalCss={"md:px-20"}
            />

            <SustainableText />

            <AchievedSustainableGoals 
                achievedGoals={achievedGoals}
            />
        </section>
    )
}