import { PostPillar } from "../Pages/AdminDashboard/Components/PostPillar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import { usePost } from "../CustomHooks/usePost";
import { useState } from "react";

export function AdminPost({
    topic,
    setAction,
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
    setLoading
}){
    console.log(setAllPillars)
    const [postSuccess, setPostSuccess] = useState(false)

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm()

    const postConfig = {
        pillars: {
            endpoint: "/api/pillars",
            setState: setAllPillars,
            component: PostPillar,
            props: {allPillars, setAllPillars, register, errors}
        }
    }

    const current = postConfig[topic]

    const handleInstancePost = (formData) => {
        console.log("topic:", topic)
        console.log("current:", current)

        usePost({
            url: current.endpoint,
            body: formData,
            credentials: "include",
            setLoading: setLoading,
            onSuccess: (newInstance) => {
                current.setState(prev => [...prev, newInstance])
                setPostSuccess(true)
            }
        })
    }



    return(
        <form
            onSubmit={handleSubmit(handleInstancePost)}
        >
            <div
                className="flex gap-4 px-4 py-2 items-center border-b border-dashed"
            >
                <FontAwesomeIcon 
                    icon={faChevronCircleLeft}
                    className="text-2xl text-blue-600"
                    onClick={() => setAction(null)}
                />

                <h1
                    className="text-2xl uppercase"
                >
                    Add New {topic}
                </h1>
            </div>

            {postSuccess
                ? <div>
                    Successful Post
                </div>
                : null
            }

            {current?.component && (
                <current.component {...current.props}/>
            )}

            <div
                className="flex justify-center text-white"
            >
                <button
                    className="uppercase bg-green-600/80 mt-4 mb-4 rounded px-4 h-10 cursor-pointer hover:-translate-y-2 duration-200"
                >
                    Add New {topic}
                </button>
            </div>
        </form>
    )
}