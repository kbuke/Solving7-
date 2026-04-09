import { Link } from "react-router"
import bgImg from "/ProductPics/SchoolDesks.png"

export function PgNotFound(){
    return(
        <section
            style={{backgroundImage: `url(${bgImg})`}}
            className="h-screen w-full bg-center bg-cover bg-no-repeat flex items-center justify-center"
        >
            <div
                className="bg-black/60 w-[90%] h-[70%] p-4 rounded-xl flex flex-col justify-center"
            >
                <h1
                    className="text-white uppercase text-3xl lg:text-6xl font-bold tracking-widest"
                >
                    Sorry This page does not exist
                </h1>

                <div
                    className="flex justify-center mt-10"
                >
                    <Link
                        className="bg-green-600/80 text-white px-10 py-4 rounded-xl animate-pulse h-18 w-60 text-2xl cursor-pointer hover:-translate-y-2 duration-200"
                        to={"/"}
                    >
                        Back To Home
                    </Link>
                </div>
            </div>
        </section>
    )
}