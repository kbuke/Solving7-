export function SustainableText(){
    return(
        <div
            className="block lg:grid lg:grid-cols-[3fr_2fr] gap-10"
        >
            <div>
               <img 
                    src="/unGoalsCover.jpg"
                    className="rounded-lg mt-4 px-4 lg:hidden"
                />

                <p
                    className="home-text"
                >
                    <span className="font-bold">The United Nations Sustainable Development Goals (SDGs)</span> are a global blueprint for building a more just, prosperous, and sustainable world. Adopted in 2015 as part of the United Nations General Assembly 2030 Agenda for Sustainable Development, the 17 goals address the world’s most urgent challenges — including poverty, inequality, climate change, environmental protection, and access to education and healthcare.
                </p>

                <p
                    className="home-text"
                >
                    The SDGs are built on the principle of “leaving no one behind,” recognizing that lasting progress must be inclusive and interconnected. By bringing together governments, businesses, communities, and individuals, the programme promotes collective action and shared responsibility to create measurable, long-term impact for people and the planet.
                </p>
            </div>

            <img 
                src="/unGoalsCover.jpg"
                className="rounded-lg hidden lg:block"
            />
        </div>
    )
}