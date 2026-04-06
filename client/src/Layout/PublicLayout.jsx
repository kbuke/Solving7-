import { useState } from "react";
import { Outlet, useOutletContext } from "react-router";
import { PublicNavBar } from "../Component/NavBar/PublicNavBar";

export function PublicLayout(){
    const [openMobileNav, setOpenMobileNav] = useState(false)

    const appData = useOutletContext()

    const navOptions = [
        {
            text: "Pillars",
            link: "/pillars"
        },

        {
            text: "Products",
            link: "/products"
        },

        {
            text: "UN Sustainability Goals",
            link: "/sustainable"
        },

        {
            text: "Contact Us",
            link: "/contact"
        }
    ]

    return(
        <>
            <PublicNavBar />
            {/* <NavBar 
                navOptions={navOptions}
            /> */}
            <Outlet context={appData} />
        </>
    )
}