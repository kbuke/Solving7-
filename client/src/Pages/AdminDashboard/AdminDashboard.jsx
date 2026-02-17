import { useState } from "react"
import { PopUp } from "../../Component/PopUp"
import { LogOut } from "./Components/LogOut"

export function AdminDashboard(){
    const [logout, setLogout] = useState()

    const adminSections = ["Pillars", "Teams", "Employees", "UN Sustainability Goals", "News"]

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
                                src={`/AdminPics/${aS}.png`}
                                className="rounded"
                            />

                            <h2
                                className="uppercase text-2xl tracking-wide lg:text-4xl lg:mt-4"
                            >
                                {aS}
                            </h2>

                            <button
                                className="
                                    rounded px-2 bg-blue-500 text-white uppercase w-[40%] h-10
                                    lg:h-15 lg:w-[30%] lg:text-2xl mt-2 cursor-pointer lg:mt-4
                                "
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
            )
            }
        </section>
    )
}