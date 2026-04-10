import { Link, NavLink } from "react-router"
import NavLogo from "../../../public/logoBlack.png"

export function DesktopNavBar({
    navOptions
}){
    return(
        <div
            className="
                hidden md:flex md:h-30 w-full bg-gray-600 top-0 sticky z-20 
                justify-around items-center border-b border-white
            "
        >
            <Link
                to="/"
            >
                <img 
                    src={NavLogo}
                    className="h-36"
                />
            </Link>
            
            {navOptions?.map((option, index) => (
                <div key={index} className="relative group w-[17%] text-center">

                    <NavLink
                        to={option?.link}
                        className={({ isActive }) =>
                            `border rounded-lg p-4 block capitalize cursor-pointer lg:text-lg
                            ${isActive
                                ? "bg-white text-black font-bold"
                                : "text-white opacity-60 hover:opacity-100"
                            }`
                        }
                    >
                        {option?.text}
                    </NavLink>

                    {/* 🔻 Dropdown */}
                    {option.children && (
                        <div className="absolute left-0 top-full hidden group-hover:flex flex-col bg-gray-600 w-full shadow-lg z-50">
                            {option.children.map((child, i) => (
                                <NavLink
                                    key={i}
                                    to={child.link}
                                    className="p-3 text-white hover:bg-gray-500 hover:cursor-pointer border-b border-white flex items-center gap-10"
                                >
                                    {
                                        child.logo &&
                                            <img 
                                                src={child.logo}
                                                className="h-10 w-10 rounded-full"
                                            />
                                    }

                                    {child.text}
                                </NavLink>
                            ))}
                        </div>
                    )}

                </div>
            ))}
        </div>
    )
}