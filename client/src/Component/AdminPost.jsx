import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons"
import { useForm } from "react-hook-form"
import { usePost } from "../CustomHooks/usePost"
import { useState } from "react"
import { TeamInputs } from "../Pages/AdminDashboard/Components/Teams/TeamInputs"
import { PillarInput } from "../Pages/AdminDashboard/Components/Pillars/PillarInput"
import { EmployeeInput } from "../Pages/AdminDashboard/Components/Employees/EmployeeInput"
import { SustainableInputs } from "../Pages/AdminDashboard/Components/UnSustainabilityGoals/SustainableInputs"
import { ProductInput } from "../Pages/AdminDashboard/Components/Products/ProductInput"

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
  setLoading,
}) {
  const [postSuccess, setPostSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm()

  const postConfig = {
    pillars: {
      endpoint: "/api/pillars",
      setState: setAllPillars,
      component: PillarInput,
      props: { allPillars, setAllPillars, register, errors },
    },

    teams: {
      endpoint: "/api/teams",
      setState: setAllTeams,
      component: TeamInputs,
      props: { allTeams, setAllTeams, register, errors },
    },

    employees: {
        endpoint: "/api/members",
        setState: setAllEmployees,
        component: EmployeeInput,
        props: {allEmployees, setAllEmployees, allTeams, register, errors, control, allTeams, control}
    },

    sustainabilityGoals: {
        endpoint: "/api/sustainability",
        setState: setUnGoals,
        component: SustainableInputs,
        props: {unGoals, setUnGoals, register, errors}
    },

    products: {
        endpoint: "/api/products",
        setState: setAllProducts,
        component: ProductInput,
        props: {allProducts, setAllProducts, register, errors}
    }
  }

  const current = postConfig[topic]

  const handleInstancePost = (formData) => {
    usePost({
      url: current.endpoint,
      body: formData,
      credentials: "include",
      setLoading: setLoading,
      onSuccess: (newInstance) => {
        current.setState((prev) => [...prev, newInstance])
        setPostSuccess(true)
      },
    })
  }

  return (
    <form onSubmit={handleSubmit(handleInstancePost)}>
      <div className="flex gap-4 px-4 py-2 items-center border-b border-dashed">
        <FontAwesomeIcon
          icon={faChevronCircleLeft}
          className="text-2xl text-blue-600"
          onClick={() => setAction(null)}
        />

        <h1 className="text-2xl uppercase">Add New {topic}</h1>
      </div>

      {postSuccess ? <div>Successful Post</div> : null}

      {current?.component && <current.component {...current.props} />}

      <div className="flex justify-center text-white">
        <button className="uppercase bg-green-600/80 mt-4 mb-4 rounded px-4 h-10 cursor-pointer hover:-translate-y-2 duration-200">
          Add New {topic}
        </button>
      </div>
    </form>
  )
}
