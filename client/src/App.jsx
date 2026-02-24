import { useState } from 'react'
import { CalcScreenWidth } from './Component/CalcScreenWidth'
import { Outlet } from "react-router"
import {useFetch} from "./CustomHooks/useFetch.js"

function App() {
  const [error, setError] = useState()
  const [loading, setLoading] = useState()

  const [allPillars, setAllPillars] = useState()
  const [allTeams, setAllTeams] = useState()
  const [allEmployees, setAllEmployees] = useState()
  const [unGoals, setUnGoals] = useState()
  const [allProducts, setAllProducts] = useState()
  const [allPillarGoals, setAllPillarGoals] = useState()
  const [allEmails, setAllEmails] = useState()
  const [allProductPillars, setAllProductPillars] = useState()
  

  // Fetch all values for each model
  useFetch("/api/pillars", setAllPillars, [allPillarGoals])
  useFetch("/api/teams", setAllTeams)
  useFetch("/api/members", setAllEmployees)
  useFetch("/api/sustainability", setUnGoals)
  useFetch("/api/products", setAllProducts, [allProductPillars])
  useFetch("/api/sustainablepillar", setAllPillarGoals)
  useFetch("/api/emails", setAllEmails)
  useFetch("/api/productpillar", setAllProductPillars)

  // Calculate the width of the screen at all times
  const screenWidth = CalcScreenWidth()

  const outletContext = {
    error, setError,
    loading, setLoading,

    allTeams, setAllTeams,
    allPillars, setAllPillars,
    allEmployees, setAllEmployees,
    unGoals, setUnGoals,
    allProducts, setAllProducts,
    allPillarGoals, setAllPillarGoals,
    allEmails, setAllEmails,
    allProductPillars, setAllProductPillars,

    screenWidth
  }

  return(
    <>
      <Outlet 
        context={outletContext}
      />
    </>
  )
}

export default App
