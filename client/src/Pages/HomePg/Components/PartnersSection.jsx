import { SectionHeading } from "../../../Component/SectionHeading";

export function PartnersSection({
    allPartners
}){
    return(
        <section
            className="home-section"
        >
            <SectionHeading 
                title={"Partners"}
            />

            <p
                className="home-text"
            >
                Solving7 would like to thank all those who have helped us so far in our goals for a greener society.
            </p>

            <div
                className="flex flex-col lg:grid lg:grid-cols-3 mt-4 py-2 gap-4"
            >
                {allPartners?.map((partner, index) => {
                    const partnerName = partner?.name
                    const partnerLogo = `/PartnerLogos/${partnerName}Logo.png`

                    return(
                        <div
                            key={index}
                            className="flex flex-col justify-center items-center mb-10 lg:mb-4"
                        >
                            <img 
                                src={partnerLogo}
                                className="h-40 w-40"
                            />

                            <h2
                                className="uppercase text-3xl tracking-widest"
                            >
                                {partnerName}
                            </h2>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}