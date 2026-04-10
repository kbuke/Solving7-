import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import {PopUp} from "../PopUp.jsx"
import { DesktopNavBar } from "./DesktopNavBar.jsx";
import { MobileNavBar } from "./MobileNavBar.jsx";

import { Link } from "react-router";

import NavLogo from "../../../public/logoBlack.png"
import { text } from "@fortawesome/fontawesome-svg-core";

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
            text: "Home",
            link: "/"
        },

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
            <div className="sticky top-0 z-50 lg:hidden bg-gray-500 py-2 px-6 w-full border-b border-white flex justify-between items-center">
                <Link
                    to="/"
                >
                    <img 
                        src={NavLogo}
                        className="h-20"
                    />
                </Link>

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