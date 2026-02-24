import { useState, useEffect } from "react"
import { PopUp } from "../../Component/PopUp"
import { LogOut } from "./Components/LogOut"
import { useNavigate, useOutletContext } from "react-router"
import { AdminPopUp } from "../../Component/AdminPopUp"

export function AdminDashboard(){
    const [logout, setLogout] = useState()
    const [selectedTopic, setSelectedTopic] = useState()

    const appData = useOutletContext()

    const allTeams = appData?.allTeams
    const setAllTeams = appData?.setAllTeams

    const allPillars = appData?.allPillars
    const setAllPillars = appData?.setAllPillars

    const allEmployees = appData?.allEmployees
    const setAllEmployees = appData?.setAllEmployees

    const unGoals = appData?.unGoals
    const setUnGoals = appData?.setUnGoals

    const allProducts = appData?.allProducts
    const setAllProducts = appData?.setAllProducts

    const setLoading = appData?.setLoading

    const allNews = appData?.allNews
    const setAllNews = appData?.setAllNews

    const navigate = useNavigate()

    // Ensure user is logged in and not just entered the url
    useEffect(() => {
        const checkAuth = async () => {
            try {
                const res = await fetch("/api/check-admin", {
                    credentials: "include",
                })
                if (!res.ok) {
                    navigate("/login")
                }
            } catch (err) {
                console.error(err)
                navigate("/login")
            }
        }
        checkAuth()
    }, [])

    // Create object of all the options on rendered page
    const adminSections = [
        {key: "pillars", label: "Pillars"},
        {key: "teams", label: "Teams"},
        {key: "employees", label: "Employees"},
        {key: "sustainabilityGoals", label: "UN Sustainability Goals"},
        {key: "products", label: "Products"},
        {key: "news", label: "News"}
    ]

    return(
        <section
            className="py-2 w-screen"
        >
            <div
                className="border-b border-black/60 py-4 flex justify-between items-center mb-4 px-4 z-20 sticky top-0 bg-white"
            >
                <h1
                    className="
                        uppercase font-bold tracking-widest text-lg
                        lg:text-8xl
                    "
                >
                    Admin Dashboard
                </h1>

                <button
                    className="px-4 rounded bg-red-500 text-white h-10 lg:h-20 lg:w-40 uppercase lg:text-2xl hover:-translate-y-2 duration-200 cursor-pointer"
                    onClick={() => setLogout(true)}
                >
                    Logout
                </button>
            </div>

            <div
                className="lg:grid lg:grid-cols-3 lg:gap-4 px-6"
            >
                {adminSections.map((aS, index) => {
                    return(
                        <div
                            key={index}
                            className="mb-4 flex flex-col border-b border-gray-400/80 py-2 items-center lg:py-4"
                        >
                            <img 
                                src={`/AdminPics/${aS.label}.png`}
                                className="rounded"
                            />

                            <h2
                                className="uppercase text-2xl tracking-wide lg:text-4xl lg:mt-4"
                            >
                                {aS.label}
                            </h2>

                            <button
                                className="
                                    rounded px-2 bg-blue-500 text-white uppercase w-[40%] h-10
                                    lg:h-15 lg:w-[30%] lg:text-2xl mt-2 cursor-pointer lg:mt-4
                                "
                                onClick={() => setSelectedTopic(aS.key)}
                            >
                                See More
                            </button>
                        </div>
                    )
                })}
            </div>

            {logout && (
                <PopUp>
                    <LogOut 
                        setLogout={setLogout}
                    />
                </PopUp>
            )}

            {selectedTopic && (
                <PopUp>
                    <AdminPopUp 
                        topic={selectedTopic}
                        setTopic={setSelectedTopic}

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
                </PopUp>
            )}
        </section>
    )
}