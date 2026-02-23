import { NavBar } from "../Component/NavBar"
import { Outlet, useOutletContext } from "react-router";

export function PublicLayout(){
    const appData = useOutletContext()

    return(
        <>
            <NavBar />
            <Outlet context={appData} />
        </>
    )
}