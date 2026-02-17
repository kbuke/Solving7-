import { useState } from 'react'
import { CalcScreenWidth } from './Component/CalcScreenWidth'
import { Outlet } from "react-router"

function App() {
  const [error, setError] = useState()
  const [loading, setLoading] = useState()

  // Calculate the width of the screen at all times
  const screenWidth = CalcScreenWidth()

  const outletContext = {
    error, setError,
    loading, setLoading,
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
