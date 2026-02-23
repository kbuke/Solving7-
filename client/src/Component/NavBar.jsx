import { NavLink, Link } from "react-router"

export function NavBar(){
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
        <div
            className="
                hidden md:flex md:h-30 w-full bg-black top-0 sticky z-20
                justify-around items-center
            "
        >
            {navOptions.map((option, index) => (
                <Link
                    key={index}
                    className="text-white border rounded-lg p-4 w-[18%] text-center capitalize cursor-pointer lg:text-lg"
                    to={option?.link}
                >
                    {option?.text}
                </Link>
            ))}
        </div>
    )
}