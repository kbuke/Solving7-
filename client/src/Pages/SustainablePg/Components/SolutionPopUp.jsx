import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons"
import { PillarImg } from "../../../Component/PillarImg"

export function SolutionPopUp({
    selectedGoal,
    setSelectedGoal
}){
    const goalPillars = selectedGoal?.pillars
    return(
        <div
            className="bg-white w-[90%] h-[90%] lg:h-[72%] rounded overflow-y-auto"
        >
            <div
                className="lg:hidden"
            >
                <img 
                    src={`/UN-PopUp/${selectedGoal?.id}-landscape.png`}
                    className="w-full lg:hidden"
                />

                <p
                    className="mt-4 px-4 text-lg"
                >
                    {selectedGoal?.info}
                </p>

                <div
                    className="flex justify-center"
                >
                    <button
                        className="bg-red-600/80 text-white uppercase px-4 mb-4 mt-4 w-30 h-12 rounded"
                        onClick={() => setSelectedGoal()}
                    >
                        Close
                    </button>
                </div>
            </div>

            <div
                className="hidden lg:grid grid-cols-[1fr_3fr]"
            >
                <img 
                    src={`/UN-PopUp/${selectedGoal?.id}.png`}
                    className="h-200"
                />

                <div
                    className="overflow-y-auto ml-4"
                >
                    <div
                        className="mt-4 flex justify-between px-4 py-2 border-b border-black/40"
                    >
                        <h1
                            className="uppercase text-5xl tracking-wide"
                        >
                            {selectedGoal?.goal}
                        </h1>

                        <FontAwesomeIcon 
                            icon={faCircleXmark}
                            className="lg:text-5xl lg:rounded-full lg:text-red-600/80 lg:cursor-pointer"
                            onClick={() => setSelectedGoal()}
                        />
                    </div>

                    <p
                        className="text-lg mt-2"
                    >
                        {selectedGoal?.info}
                    </p>

                    <h1
                        className="mt-4 uppercase text-3xl"
                    >
                        How Solving7 Meets These Goals
                    </h1>

                    <div
                        className="grid grid-cols-2 gap-4"
                    >
                        {goalPillars.map((pillar, index) => {
                            const pillarId = pillar?.id
                            const pillarName = pillar?.name

                            return(
                                <div
                                    key={index}
                                    className="mt-4 py-2 grid grid-cols-[1fr_4fr] gap-4 items-center border-b border-black/40"
                                >
                                    <img 
                                        src={PillarImg(pillarId)}
                                        className="h-30 w-30 rounded-full"
                                    />

                                    <h2
                                        className="text-xl"
                                    >
                                        <span
                                            className="font-bold"
                                        >Pillar {pillarId}: </span> {pillarName}
                                    </h2>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

        </div>
    )
}