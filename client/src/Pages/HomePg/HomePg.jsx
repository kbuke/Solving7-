import { useOutletContext } from "react-router"
import { HeroSection } from "./Components/HeroSection"
import { AboutSection } from "./Components/AboutSection"
import { TeamSection } from "./Components/TeamSection"
import { NewsSection } from "./Components/NewsSection"

export function HomePg(){
    const appData = useOutletContext()
    const screenWidth = appData?.screenWidth

    const allTeams = appData?.allTeams

    const allNews = appData?.allNews

    return(
        <section>
            <HeroSection 
                screenWidth={screenWidth}
            />

            <AboutSection 
                screenWidth={screenWidth}
            />

            <TeamSection 
                allTeams={allTeams}
            />

            <NewsSection 
                allNews={allNews}
            />
        </section>
    )
}