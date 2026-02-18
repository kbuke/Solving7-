import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons"
import { AdminTeams } from "../Pages/AdminDashboard/Components/AdminTeams"
import { AdminPillars } from "../Pages/AdminDashboard/Components/AdminPillars"
import { AdminEmployees } from "../Pages/AdminDashboard/Components/AdminEmployees"
import { AdminSustainability } from "../Pages/AdminDashboard/Components/AdminSustainabiliy"
import { AdminProducts } from "../Pages/AdminDashboard/Components/AdminProducts"

export function AdminPopUp({
    topic,
    setTopic,

    //Import all instances of all models
    allTeams,
    allPillars,
    allEmployees,
    unGoals,
    allProducts
}){
    const componentMap = {
        pillars: AdminPillars,
        teams: AdminTeams,
        employees: AdminEmployees,
        sustainabilityGoals: AdminSustainability,
        products: AdminProducts
    }

    const propsMap = {
        pillars: {allPillars},
        teams: {allTeams},
        employees: {allEmployees},
        sustainabilityGoals: {unGoals},
        products: {allProducts}
    }

    const SelectedComponent = componentMap[topic]

    return(
        <div
            className="
                bg-white h-200 w-[90%] rounded-lg flex flex-col
                lg:w-[98%] lg:h-240
            "
        >
            <div
                className="px-4 py-2 lg:py-4 flex flex-col gap-2 border-b border-black/60"
            >
                <div
                    className="flex items-center justify-between"
                >
                    <h1
                        className="
                            uppercase text-2xl tracking-widest
                            lg:text-6xl
                        "
                    >
                        {topic}
                    </h1>

                    <div
                        className="hidden lg:block"
                    >
                        <FontAwesomeIcon 
                            icon={faCircleXmark}
                            className="lg:text-5xl lg:rounded-full lg:text-red-600/80 lg:cursor-pointer"
                            onClick={() => setTopic()}
                        />
                    </div>
                </div>

                <button
                    className="
                        self-center bg-green-600/80 rounded text-white w-[50%] px-4 h-12 uppercase
                        lg:w-[15%] lg:h-16 lg:text-2xl hover:-translate-y-2 duration-200 cursor-pointer
                    "
                >
                    Add {topic}
                </button>
            </div>

            {/* {instances} */}
            <div
                className="flex-1 overflow-y-auto"
            >
                {SelectedComponent && (
                    <SelectedComponent {...propsMap[topic]} />
                )}
            </div>

            {/* Create a button tab where the user can close the pop up, only in the mobile */}
            <div
                className="border-t border-black/60 bottom-0 lg:hidden flex justify-end px-4 py-2 sticky z-10"
            >
                <button
                    className="bg-red-600/80 rounded text-white w-[50%] px-4 h-12"
                    onClick={() => setTopic()}
                >
                    Close
                </button>
            </div>
        </div>
    )
}