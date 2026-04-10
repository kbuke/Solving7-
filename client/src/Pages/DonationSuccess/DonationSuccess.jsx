import { useEffect, useState } from "react"
import {useSearchParams} from "react-router-dom"
import { Link } from "react-router-dom"


export function DonationSuccess(){
    const [searchParams] = useSearchParams()
    const [status, setStatus] = useState("verifying")

    const reference = searchParams.get("reference")

    useEffect(() => {
        async function verify(){
            try{
                const res = await fetch(
                    `${import.meta.env.VITE_API_URL}/verify/${reference}`
                )
                const data = await res.json()

                console.log("Verify Response:", data)

                if(data?.data?.status === "success"){
                    setStatus("success")
                } else {
                    setStatus("failed")
                }
            } catch {
                setStatus("error")
            }
        }
        if(reference) verify()
    }, [reference])

    return(
        <section
            style={{backgroundImage: `url("/aboutMobImg.jpg")`}}
            className="
                flex bg-center bg-no-repeat bg-cover h-screen lg:h-[calc(100vh-7.5rem)]
                items-center px-4
            "
        >
            <div
                className="bg-black/60 h-[80%] w-[80%] rounded-xl text-white p-6"
            >
                {status === "verifying"
                    ? <h1>Verifying Payment...</h1>
                    : status === "success"
                    ? <div
                        className="bg-green-600/40 rounded p-4"
                    >
                        <h1
                            className="uppercase text-4xl tracking-widest"
                        >
                            Donation Complete
                        </h1>
                        <p>Solving7, our partners and all those who we support would like to thank you for your donation</p>
                    </div>
                    : <div
                        className="bg-red-600/40 rounded p-4"
                    >
                        <h1
                            className="uppercase text-4xl tracking-widest"
                        >
                            Unfortunately Payment Failed
                        </h1>
                        <p>If you would like to try again please return to the Home Page</p>
                    </div>
                }

                <div
                    className="flex justify-center mt-10"
                >
                    <Link
                        to={"/"}
                    >
                        <button
                            className="bg-green-600/60 p-4 rounded-xl uppercase tracking-widest h-20 cursor-pointer hover:-translate-y-2 duration-200"
                        >
                            Return Home
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    )
}