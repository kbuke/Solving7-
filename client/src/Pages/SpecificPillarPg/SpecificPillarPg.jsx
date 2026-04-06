import { useState } from "react";
import { useParams } from "react-router";
import { useFetch } from "../../CustomHooks/useFetch";

export function SpecificPillarPage(){
    const [selectedPillar, setSelectedPillar] = useState([])

    const id = useParams()
    const selectedPillarId = id?.id

    useFetch(`/api/pillars/${selectedPillarId}`, setSelectedPillar)

    const pillarUnGoals = selectedPillar?.sustainable_goals
    const pillarProducts = selectedPillar?.products

    const pillarGoals = (
        pillarCat,
        rightBorder
    ) => {
        return(
            <div
                className={`mb-10 lg:mb-0 ${rightBorder ? "lg:border-r lg:border-black/60 px-4 mt-4" : "px-4 mt-4"}`}
            >
                <img 
                    src={`/challengeOfferingSuccess/${pillarCat}.png`}
                    className="h-20 justify-self-center"
                />

                <p
                    className="uppercase font-bold text-center tracking-widest"
                >
                    {pillarCat}
                </p>

                <p className="text-black text-center mt-2">
                    {selectedPillar[pillarCat]}
                </p>
            </div>
        )
    }

    return(
        <section
            className="pt-14 lg:pt-6"
        >
            <h1
                className="secondary-heading text-xl"
            >
                <span className="font-bold">Pillar {selectedPillarId}: </span>
                {selectedPillar?.name}
            </h1>

            <div
                className="mt-8 flex flex-col lg:grid lg:grid-cols-[2fr_1fr] lg:px-6"
            >
                <img 
                    src={`/PillarPics/${selectedPillarId}.png`}
                    alt={`pillar ${selectedPillarId} img`}
                    className="rounded lg:hidden h-[60%]"
                />

                <div
                    className="lg:grid lg:grid-cols-3 gap-2"
                >
                    {pillarGoals("challenge", true)}
                    {pillarGoals("offering", true)}
                    {pillarGoals("success")}
                </div>

                <img 
                    src={`/PillarPics/${selectedPillarId}.png`}
                    alt={`pillar ${selectedPillarId} img`}
                    className="rounded hidden lg:block"
                />
            </div>

            <div
                className="bg-gray-400 p-6 flex flex-col lg:grid lg:grid-cols-[2fr_1fr] mt-8"
            >
                <div
                    className="lg:border-r"
                >
                    <h1
                        className="uppercase text-white text-4xl tracking-widest mb-8"
                    >
                        Achieved UN Sustainability Goals
                    </h1>

                    <div
                        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                    >
                        {pillarUnGoals?.map((goal, index) => (
                            <img 
                                key={index}
                                src={`/UN-Logos/${goal?.id}/${goal?.id}.jpg`}
                                className="h-40 rounded"
                            />
                        ))}
                    </div>
                </div>

                <div
                    className="mt-4 lg:mt-0 lg:ml-4"
                >
                    <h1
                        className="uppercase text-white text-4xl tracking-widest mb-8"
                    >
                        Products
                    </h1>
                    {pillarProducts?.map((product, index) => {
                        const productName = product?.name 
                        return(
                            <div
                                key={index}
                                className="flex items-center gap-4 bg-white lg:bg-none uppercase rounded-xl p-2 hover:-translate-y-2 duration-200 hover:cursor-pointer mb-4"
                            >
                                <img 
                                    src={`/ProductPics/${productName}.png`}
                                    className="h-30 w-30 rounded-xl"
                                />

                                <p>
                                    {productName}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}