import { useOutletContext } from "react-router"
import { HeroSection } from "./Components/HeroSection"
import { AboutSection } from "./Components/AboutSection"
import { TeamSection } from "./Components/TeamSection"
import { NewsSection } from "./Components/NewsSection"
import { PartnersSection } from "./Components/PartnersSection"
import { CircularEconomy } from "./Components/CircularEconomy"
import { InfoSection } from "./Components/InfoSection"
import { DonateSection } from "./Components/DonateSection"
import { SkyNews } from "./Components/SkyNews"
import { useState } from "react"
import { PopUp } from "../../Component/PopUp"
import { ArticlePopUp } from "./Components/ArticlePopUp"

export function HomePg(){
    const [selectedArticle, setSelectedArticle] = useState()

    const appData = useOutletContext()
    const screenWidth = appData?.screenWidth

    const allTeams = appData?.allTeams

    const allNews = appData?.allNews

    const allPartners = appData?.allPartners

    return(
        <section>
            <HeroSection 
                screenWidth={screenWidth}
            />

            <AboutSection 
                screenWidth={screenWidth}
            />

            <SkyNews />

            {/* <CircularEconomy /> */}

            <NewsSection 
                allNews={allNews}
                setSelectedArticle={setSelectedArticle}
            />

            <TeamSection 
                allTeams={allTeams}
            />

            <DonateSection />

            <PartnersSection 
                allPartners={allPartners}
            />

            {/* <DonateSection /> */}

            <InfoSection />

            {selectedArticle &&
                <PopUp>
                    <ArticlePopUp 
                        selectedArticle={selectedArticle}
                        setSelectedArticle={setSelectedArticle}
                    />
                </PopUp>
            }
        </section>
    )
}