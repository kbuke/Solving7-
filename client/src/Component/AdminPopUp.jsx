import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons"
import {AdminTeams} from "../Pages/AdminDashboard/Components/Teams/AdminTeams"
import {AdminPillars} from "../Pages/AdminDashboard/Components/Pillars/AdminPillars"
import {AdminEmployees} from "../Pages/AdminDashboard/Components/Employees/AdminEmployees"
import {AdminSustainability} from "../Pages/AdminDashboard/Components/UnSustainabilityGoals/AdminSustainabiliy"
import {AdminProducts} from "../Pages/AdminDashboard/Components/Products/AdminProducts"
import { useState } from "react"
import { AdminPost } from "./AdminPost"
import { AdminDelete } from "./AdminDelete"
import { AdminPatch } from "./AdminPatch"
import { AdminNews } from "../Pages/AdminDashboard/Components/News/AdminNews"

export function AdminPopUp({
    topic,
    setTopic,

    //Import all instances of all models
    allTeams,
    setAllTeams,
    allPillars,
    setAllPillars,
    allEmployees,
    setAllEmployees,
    unGoals,
    setUnGoals,
    allProducts,
    setAllProducts,
    allNews,
    setAllNews,

    setLoading
}){
    const [action, setAction] = useState(null)
    const [selectedInstance, setSelectedInstance] = useState()

    const componentMap = {
        pillars: AdminPillars,
        teams: AdminTeams,
        employees: AdminEmployees,
        sustainabilityGoals: AdminSustainability,
        products: AdminProducts,
        news: AdminNews
    }

    const propsMap = {
        pillars: {allPillars, setSelectedInstance, setAction},
        teams: {allTeams, setSelectedInstance, setAction},
        employees: {allEmployees, setSelectedInstance, setAction},
        sustainabilityGoals: {unGoals, setSelectedInstance, setAction},
        products: {allProducts, setSelectedInstance, setAction},
        news: {allNews, setSelectedInstance, setAction}
    }

    const SelectedComponent = componentMap[topic]

    //Ensure models with number limits can not be added when met
    const modelLimits = {
        pillars: 7,
        sustainabilityGoals: 17
    }

    const currentCountMap = {
        pillars: allPillars?.length ?? 0,
        teams: allTeams?.length ?? 0,
        employees: allEmployees?.length ?? 0,
        sustainabilityGoals: unGoals?.length ?? 0,
        products: allProducts?.length ?? 0
    }

    const isAddDisabled = 
        modelLimits[topic] && 
        currentCountMap[topic] >= modelLimits[topic]

    return(
        <div
            className="
                bg-white h-200 w-[90%] rounded-lg flex flex-col
                lg:w-[98%] lg:h-[96%]
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

                {action || isAddDisabled
                    ? null
                    : <button
                        className="
                            self-center bg-green-600/80 rounded text-white w-[50%] px-4 h-12 uppercase
                            lg:w-[15%] lg:h-16 lg:text-2xl hover:-translate-y-2 duration-200 cursor-pointer
                        "
                        onClick={() => setAction("post")}
                    >
                        Add {topic}
                    </button>
                }
            </div>

            {/* Instances */}
            <div
                className="flex-1 overflow-y-auto"
            >
                {action === "post"
                    ? <AdminPost 
                        topic={topic}
                        setAction={setAction}
                        allTeams={allTeams}
                        setAllTeams={setAllTeams}
                        allPillars={allPillars}
                        setAllPillars={setAllPillars}
                        allEmployees={allEmployees}
                        setAllEmployees={setAllEmployees}
                        unGoals={unGoals}
                        setUnGoals={setUnGoals}
                        allProducts={allProducts}
                        setAllProducts={setAllProducts}
                        allNews={allNews}
                        setAllNews={setAllNews}
                        setLoading={setLoading}
                    />
                    : action === "delete"
                    ? <AdminDelete 
                        topic={topic}
                        setAction={setAction}
                        selectedInstance={selectedInstance}
                        setAllTeams={setAllTeams}
                        setAllPillars={setAllPillars}
                        setAllEmployees={setAllEmployees}
                        setUnGoals={setUnGoals}
                        setAllProducts={setAllProducts}
                        setAllNews={setAllNews}
                    />
                    : action === "patch"
                    ? <AdminPatch 
                        topic={topic}
                        setAction={setAction}
                        selectedInstance={selectedInstance}
                        allTeams={allTeams}
                        setAllTeams={setAllTeams}
                        setAllPillars={setAllPillars}
                        setAllEmployees={setAllEmployees}
                        setUnGoals={setUnGoals}
                        setAllProducts={setAllProducts}
                        setAllNews={setAllNews}
                    />
                    : SelectedComponent && (
                        <SelectedComponent {...propsMap[topic]} />
                    )
                }
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