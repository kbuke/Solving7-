import { useNavigate } from "react-router"

export function LogOut({ setLogout }) {
    const navigate = useNavigate()

    const handleConfirm = async () => {
        try {
            const res = await fetch("/api/logout", {
                method: "DELETE",
                credentials: "include"
            })

            if (!res.ok) {
                throw new Error("Logout failed")
            }

            navigate("/login")
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <div
            className="
                bg-gray-300 w-[90%] h-40 rounded-lg flex flex-col justify-center
                lg:h-50 lg:w-[50%]
            "
        >
            <div className="px-4 py-2">
                <h1 className="text-3xl mb-4 lg:text-5xl uppercase">
                    Confirm Log Out
                </h1>
            </div>

            <div className="flex gap-4 justify-center">
                <button
                    type="button"
                    onClick={handleConfirm}
                    className="rounded px-2 w-[40%] h-13 bg-green-600 text-white lg:w-[25%] lg:h-18 uppercase text-2xl cursor-pointer hover:-translate-y-2 duration-200"
                >
                    Confirm
                </button>

                <button
                    type="button"
                    onClick={() => setLogout(false)}
                    className="rounded px-2 w-[40%] h-13 bg-red-600 text-white lg:w-[25%] lg:h-18 uppercase text-2xl cursor-pointer hover:-translate-y-2 duration-200"
                >
                    Cancel
                </button>
            </div>
        </div>
    )
}
