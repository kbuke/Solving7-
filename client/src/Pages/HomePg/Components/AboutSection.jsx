import { SectionHeading } from "../../../Component/SectionHeading";

export function AboutSection({
    screenWidth
}){

    return(
        <section
            className="home-section"
        >
            <SectionHeading 
                title={"About Solving7"}
            />

            <div
                className="lg:grid lg:grid-cols-[2fr_1fr] mt-0 lg:gap-10"
            >
                <div>
                    <p
                        className="home-text"
                    >
                        Solving 7 was founded on a simple but powerful idea:
                    </p>

                    <p
                        className="font-bold home-text"
                    >
                        The challenges facing communities are interconnected — and so must be the solutions.
                    </p>

                    <p
                        className="home-text"
                    >
                        What began as an initiative to transform unrecyclable #7 plastic into school desks has evolved into a comprehensive circular development model addressing seven systemic community challenges.
                    </p>

                    <p
                        className="home-text"
                    >
                        Solving 7 operates as a systems integrator, coordinating partnerships that convert waste streams into tangible infrastructure, economic opportunities, and climate-resilient solutions. Rather than focusing on a single product, we build circular ecosystems where:
                    </p>

                    <ul>
                        <li
                            className="home-text"
                        >
                            Waste becomes infrastructure
                        </li>

                        <li
                            className="home-text"
                        >
                            Infrastructure creates livelihoods
                        </li>

                        <li
                            className="home-text"
                        >
                            Livelihoods strengthen community resilience
                        </li>
                    </ul>

                    <p
                        className="home-text"
                    >
                        Through our <span className="font-bold">Seven Pillars</span>, we deliver practical, scalable solutions in education, housing, clean energy, recycling, sanitation, skills development, and climate awareness.
                    </p>

                    <p
                        className="home-text"
                    >
                        We are more than a recycling initiative.
                    </p>

                    <p
                        className="home-text"
                    >
                        We are a regenerative community model powered by sustainability, dignity, and measurable impact.
                    </p>
                </div>

                <img 
                    src={screenWidth < 1023
                        ? "/aboutMobImg.jpg"
                        : "/aboutDtImg.jpg"
                    }
                    className="rounded-lg mt-4 lg:mt-0 lg:h-180"
                />
            </div>
        </section>
    )
}