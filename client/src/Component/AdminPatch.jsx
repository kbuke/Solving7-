import { TeamInputs } from "../Pages/AdminDashboard/Components/Teams/TeamInputs"
import { useForm } from "react-hook-form"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons"
import { usePatch } from "../CustomHooks/usePatch"
import { PillarInput } from "../Pages/AdminDashboard/Components/Pillars/PillarInput"
import { EmployeeInput } from "../Pages/AdminDashboard/Components/Employees/EmployeeInput"
import { SustainableInputs } from "../Pages/AdminDashboard/Components/UnSustainabilityGoals/SustainableInputs"
import { ProductInput } from "../Pages/AdminDashboard/Components/Products/ProductInput"

export function AdminPatch({
    topic, 
    setAction,
    selectedInstance,
    allTeams,
    setAllTeams,
    setAllPillars,
    setAllEmployees,
    setUnGoals,
    setAllProducts
}){
    const isPatch = true

    console.log(selectedInstance)

    const {
        register,
        handleSubmit,
        control,
        formState: {errors},
        reset
    } = useForm()

    const patchConfig = {
        pillars: {
            endpoint: `/api/pillars/${selectedInstance?.id}`,
            selectedId: selectedInstance?.id,
            selectedTitle: selectedInstance?.name,
            setState: setAllPillars,
            component: PillarInput,
            props: {reset, selectedInstance, setAction, isPatch, register}
        },

        teams: {
            endpoint: `/api/teams/${selectedInstance?.id}`,
            selectedId: selectedInstance?.id,
            selectedTitle: selectedInstance?.name,
            setState: setAllTeams,
            component: TeamInputs,
            props: {reset, selectedInstance, setAction, isPatch, register},
        },

        employees: {
            endpoint: `/api/members/${selectedInstance?.id}`,
            selectedId: selectedInstance?.id,
            selectedTitle: selectedInstance?.name,
            setState: setAllEmployees,
            component: EmployeeInput,
            props: {reset, selectedInstance, setAction, isPatch, register, allTeams, control}
        },

        sustainabilityGoals: {
            endpoint: `/api/sustainability/${selectedInstance?.id}`,
            selectedId: selectedInstance?.id,
            selectedTitle: selectedInstance?.goal,
            setState: setUnGoals,
            component: SustainableInputs,
            props: {reset, selectedInstance, setAction, isPatch, register}
        },
    
        products: {
            endpoint: `/api/products/${selectedInstance?.id}`,
            selectedId: selectedInstance?.id,
            selectedTitle: selectedInstance?.name,
            setState: setAllProducts,
            component: ProductInput,
            props: {reset, selectedInstance, setAction, isPatch, register}
        }
    }

    const current = patchConfig[topic]

    const handleInstancePatch = (formData) => {
        usePatch(
            formData,
            current.endpoint,
            current.selectedId,
            current.setState,
            setAction
        )
    }

    return(
        <form onSubmit={handleSubmit(handleInstancePatch)}>
            <div className="flex gap-4 px-4 py-2 items-center border-b border-dashed">
                <FontAwesomeIcon
                    icon={faChevronCircleLeft}
                    className="text-2xl text-blue-600"
                    onClick={() => setAction(null)}
                />

                <h1 className="text-2xl uppercase">
                    Edit
                </h1>
            </div>


            {current?.component && <current.component {...current.props} />}

            <div className="flex justify-center text-white">
                <button 
                    className="uppercase bg-green-600/80 mt-4 mb-4 rounded px-4 h-10 cursor-pointer hover:-translate-y-2 duration-200"
                    type="submit"
                >
                    Edit
                </button>
            </div>
        </form>
    )
}