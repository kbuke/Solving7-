import { faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";
import { useDelete } from "../CustomHooks/useDelete";

export function AdminDelete({
    topic,
    setAction,
    selectedInstance,
    setAllTeams,
    setAllPillars,
    setAllEmployees,
    setUnGoals,
    setAllProducts,
    setAllNews
}){
    const {
        handleSubmit,
        formState: {errors}
    } = useForm()

    console.log(selectedInstance)

    const deleteConfig = {
        pillars: {
            endpoint: `/api/pillars/${selectedInstance?.id}`,
            selectedId: selectedInstance?.id,
            selectedTitle: selectedInstance?.name,
            setState: setAllPillars
        },

        teams: {
            endpoint: `/api/teams/${selectedInstance?.id}`,
            selectedId: selectedInstance?.id,
            selectedTitle: selectedInstance?.name,
            setState: setAllTeams
        },

        employees: {
            endpoint: `/api/members/${selectedInstance?.id}`,
            selectedId: selectedInstance?.id,
            selectedTitle: selectedInstance?.name,
            setState: setAllEmployees
        },

        sustainabilityGoals: {
            endpoint: `/api/sustainability/${selectedInstance?.id}`,
            selectedId: selectedInstance?.id,
            selectedTitle: selectedInstance?.goal,
            setState: setUnGoals
        },
    
        products: {
            endpoint: `/api/products/${selectedInstance?.id}`,
            selectedId: selectedInstance?.id,
            selectedTitle: selectedInstance?.name,
            setState: setAllProducts
        },

        news: {
            endpoint: `/api/news/${selectedInstance?.id}`,
            selectedId: selectedInstance?.id,
            selectedTitle: selectedInstance?.title,
            setState: setAllNews
        }
    }

    const current = deleteConfig[topic]

    const handleInstanceDelete = () => {
        useDelete(
            current?.endpoint,
            current?.setState,
            current?.selectedId,
            setAction
        )
    }

    return(
        <form
            onSubmit={handleSubmit(handleInstanceDelete)}
        >
            <div className="flex gap-4 px-4 py-2 items-center border-b border-dashed">
                <FontAwesomeIcon 
                    icon={faChevronCircleLeft}
                    className="text-2xl text-blue-600 cursor-pointer"
                    onClick={() => setAction(null)}
                />

                <h1 className="text-2xl uppercase">
                    Delete {current?.selectedTitle}
                </h1>
            </div>

            <div
                className="flex justify-center mt-4"
            >
                <button
                    className="
                        bg-red-600/80 rounded px-4 w-[60%] h-12 text-white uppercase
                        lg:w-[16%] lg:h-16 cursor-pointer hover:-translate-y-2 duration-200
                    "
                    type="submit"
                >
                    Confirm Deletion
                </button>
            </div>
        </form>
    )
}