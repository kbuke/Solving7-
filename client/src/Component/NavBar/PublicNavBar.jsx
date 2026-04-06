import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import {PopUp} from "../PopUp.jsx"
import { DesktopNavBar } from "./DesktopNavBar.jsx";
import { MobileNavBar } from "./MobileNavBar.jsx";

export function PublicNavBar(){
    const [openNav, setOpenNav] = useState(false)

    const pillarOptions = (pillarNumber, pillarName) => {
        return(
            {
                text: `Pillar ${pillarNumber}: ${pillarName}`,
                link: `/pillars/${pillarNumber}`,
                logo: `/pillarLogos/${pillarNumber}.png`
            }
        )
    }

    const navOptions = [
        {
            text: "Pillars",
            link: "/pillars",
            children: [
                {text: "Overview", link: "/pillars"},
                pillarOptions("1", "Education Access & Safe Learning Environments"),
                pillarOptions("2", "Affordable & Climate-Resilient Housing"),
                pillarOptions("3", "Clean Cooking Reduced Indoor Emissions"),
                pillarOptions("4", "Circular Materials & Zero-Waste Product Ecosystem"),
                pillarOptions("5", "Green Livelihoods & Skills Development"),
                pillarOptions("6", "Health, Sanitation & Community Wellness Spaces"),
                pillarOptions("7", "Circular Behaviour Change & Climate Resilience Education")
            ]
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

    return (
        <>
            {/* 🔹 MOBILE: Hamburger icon */}
            <div className="fixed top-4 right-4 z-50 lg:hidden">
                <FontAwesomeIcon
                    icon={faBars}
                    className="p-3 rounded-full bg-white shadow-md cursor-pointer"
                    onClick={() => setOpenNav(true)}
                />
            </div>

            {/* 🔹 MOBILE: Overlay menu */}
            {openNav && (
                <PopUp>
                    <MobileNavBar 
                        navOptions={navOptions}
                        setState={setOpenNav}
                    />
                </PopUp>
            )}

            {/* 🔹 DESKTOP: Full navbar */}
            <div className="hidden lg:block sticky top-0 z-40">
                <DesktopNavBar navOptions={navOptions} />
            </div>
        </>
    )
}