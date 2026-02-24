import { useState } from "react"
import { PillarImg } from "../../../Component/PillarImg"
import { UnImg } from "../../../Component/UnImg"

export function PillarInfo({ allPillars }) {

    const [currentIndex, setCurrentIndex] = useState(0)

    const next = () => {
        setCurrentIndex((prev) =>
            prev === allPillars.length - 1 ? 0 : prev + 1
        )
    }

    const prev = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? allPillars.length - 1 : prev - 1
        )
    }

    const pillarTextLayout = (challengeType, challengeTypeText, icon, showRightBorder) => {
        return (
            <div
                className={`${showRightBorder ? "lg:border-r lg:border-black/60" : ""} px-4 mt-4`}
            >
                <div className="flex justify-center">
                    <img
                        src={`/challengeOfferingSuccess/${icon}.png`}
                        className="h-20"
                        alt={`${challengeType} icon`}
                    />
                </div>

                <p className="text-xl mt-2">
                    <span className="font-bold">
                        {challengeType}:
                    </span> {challengeTypeText}
                </p>
            </div>
        )
    }

    const PillarLayout = ({ pillar }) => {

        const pillarGoals = pillar?.sustainable_goals

        return (
            <div className="mb-10 border-b border-black/60 py-4 lg:mb-0 lg:border-none">
                <div className="flex flex-col lg:grid lg:grid-cols-[3fr_2fr] gap-10">

                    {/* LEFT SIDE (Text) */}
                    <div>
                        <h1 className="uppercase text-4xl">
                            <span className="font-bold">
                                Pillar {pillar?.id}:
                            </span> {pillar?.name}
                        </h1>

                        {/* Image for SMALL screens */}
                        <img
                            src={PillarImg(pillar?.id)}
                            className="rounded-lg mt-6 lg:hidden"
                            alt={`${pillar?.name}-img`}
                        />

                        <div className="mt-4 lg:grid lg:grid-cols-3 lg:gap-4">
                            {pillarTextLayout("Challenge", pillar?.challenge, "challenge", true)}
                            {pillarTextLayout("Offering", pillar?.offering, "offering", true)}
                            {pillarTextLayout("Success", pillar?.success, "success")}
                        </div>
                    </div>

                    {/* Image for LARGE screens */}
                    <img
                        src={PillarImg(pillar?.id)}
                        className="hidden lg:block rounded-lg"
                        alt={`${pillar?.name}-img`}
                    />
                </div>

                {/* Sustainable Goals */}
                <h1 className="uppercase text-3xl mt-8">
                    Sustainable Goals:
                </h1>

                <div className="flex gap-10 mt-6 flex-wrap">
                    {pillarGoals?.map((pG) => (
                        <img
                            key={pG?.id}
                            alt={`${pG?.goal} logo`}
                            src={UnImg({ specificImg: `${pG?.id}/${pG?.id}.jpg` })}
                            className="rounded h-40"
                        />
                    ))}
                </div>
            </div>
        )
    }

    return (
        <div className="mt-4">

            {/* MOBILE: Show all pillars */}
            <div className="lg:hidden">
                {allPillars?.map((pillar) => (
                    <PillarLayout key={pillar.id} pillar={pillar} />
                ))}
            </div>

            {/* DESKTOP: Show one pillar with arrows */}
            <div className="hidden lg:block relative">

                <PillarLayout pillar={allPillars[currentIndex]} />

                {/* Left Arrow */}
                <button
                    onClick={prev}
                    className="absolute left-0 top-1/2 -translate-y-1/2 
                               bg-white shadow-lg rounded-full p-4 
                               hover:scale-110 transition"
                >
                    ◀
                </button>

                {/* Right Arrow */}
                <button
                    onClick={next}
                    className="absolute right-0 top-1/2 -translate-y-1/2 
                               bg-white shadow-lg rounded-full p-4 
                               hover:scale-110 transition"
                >
                    ▶
                </button>

            </div>

        </div>
    )
}