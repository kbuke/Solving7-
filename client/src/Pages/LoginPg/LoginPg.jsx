import { useOutletContext, useNavigate } from "react-router"
import { LabelInput } from "../../Component/LabelInput"
import { useForm } from "react-hook-form"
import {usePost} from "../../CustomHooks/usePost.js"
import { useEffect } from "react"

export function LoginPg(){
    const appData = useOutletContext()

    const error = appData?.error
    const setError = appData?.setError

    const loading = appData?.loading
    const setLoading = appData?.setLoading

    const navigate = useNavigate()

    // Ensure a user can not access this page if they are already logged in. 
    useEffect(() => {
        const checkAuth = async () => {
            try {
                const res = await fetch("/api/check-admin", {
                    credentials: "include",
                })
                if (res.ok) {
                    navigate("/admin")
                }
            } catch (err) {
                console.error(err)
                navigate("/admin")
            }
        }
        checkAuth()
    }, [])

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm()

    const handleLogin = (formData) => {
        usePost({
            url: "/api/login",
            body: formData,
            credentials: "include",
            setLoading: setLoading,
            onSuccess: () => {
                navigate("/admin")
            },
            onError: setError,
        })
    }

    return(
        <div
            className="h-screen w-full bg-center bg-no-repeat bg-cover flex items-center justify-center"
            style={{backgroundImage:`url(/LoginBgImg/loginBgPortrait.jpg`}}
        >
            <form
                className="
                    h-[37%] w-[90%] bg-gray-500/60 rounded-lg p-4
                    lg:h-[48%] lg:w-[60%]
                "
                onSubmit={handleSubmit(handleLogin)}
            >
                <h1
                    className="
                        uppercase border-b border-white text-2xl text-white font-bold tracking-wider
                        lg:text-5xl
                    "
                >
                    Solving-7 Login
                </h1>

                {error && (
                    <div
                        className="
                            justify-self-center bg-red-600 w-[60%] mt-4 rounded h-10 flex items-center justify-center text-white text-xl uppercase
                        "
                    >
                        <p>
                            {error}
                        </p>
                    </div>
                )}

                <LabelInput 
                    labelText={"Email"}
                    inputType={"text"}
                    placeholderText={"Please enter email"}
                    inputName={"adminEmail"}
                    inputValidations={{
                        required: "Please enter a value"
                    }}
                    marginTop={"mt-5"}
                    labelCss={"text-white text-lg uppercase lg:text-3xl"}
                    inputCss={"bg-white rounded px-4 h-12 lg:h-16 lg:text-xl lg:w-[60%]"}
                    errors={errors}
                    register={register}
                    formCss={"font-bold text-2xl"}
                />

                <LabelInput 
                    labelText={"Password"}
                    inputType={"password"}
                    placeholderText={"Please enter password"}
                    inputName={"adminPassword"}
                    inputValidations={{
                        required: "Please enter a value"
                    }}
                    marginTop={"mt-5"}
                    labelCss={"text-white text-lg uppercase lg:text-3xl"}
                    inputCss={"bg-white rounded px-4 h-12 lg:h-16 lg:text-xl lg:w-[60%]"}
                    errors={errors}
                    register={register}
                    formCss={"font-bold text-2xl"}
                />

                <div className="flex justify-end lg:mt-4">
                    <button
                        className="
                            bg-[rgba(80,160,0,1)] rounded-lg p-2 mt-4 text-white uppercase w-[30%]
                            lg:w-[20%] lg:h-15 lg:text-2xl cursor-pointer hover:-translate-y-2 duration-200
                        "
                    >
                        Login
                    </button>
                </div>

            </form>
        </div>
    )
}