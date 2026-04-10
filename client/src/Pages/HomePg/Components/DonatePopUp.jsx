import { useState } from "react";
import { useForm } from "react-hook-form";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons"
import { LoadingIcon } from "../../../Component/LoadingIcon";
import { LabelInput } from "../../../Component/LabelInput";

export function DonatePopUp({
    setDonate
}){
    const [makingDonation, setMakingDonation] = useState(false)

    const {
        handleSubmit,
        register,
        formState: {errors}
    } = useForm()

    
    const handleDonationSubmit = async(formData) => {
        const {email, amount} = formData

        setMakingDonation(true)

        try{
            const res = await fetch("http://localhost:5555/donations", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email,
                    amount: Number(amount)
                })
            })

            const data = await res.json()

            if(data.url){
                window.location.href = data.url //redirect to paystack
            } else {
                alert(data.error || "Payment failed to initialize")
            }
        } catch (err){
            console.error(err)
            alert("Something went wrong, please try again")
        } finally {
            setMakingDonation(false)
        }
    }

    return(
        <form
            className="bg-white w-[90%] lg:w-[70%] h-[90%] lg:h-[60%] rounded flex flex-col"
            onSubmit={handleSubmit(handleDonationSubmit)}
        >
            <div
                className="mt-4 flex justify-between border-b py-2 px-10 items-center"
            >
                <h1
                    className="text-4xl uppercase tracking-widest"
                >
                    Please Donate to our Cause
                </h1>

                <FontAwesomeIcon 
                    icon={faCircleXmark}
                    className="text-5xl lg:rounded-full text-red-600/80 lg:cursor-pointer"
                    onClick={() => setDonate(false)}
                />
            </div>

            {makingDonation?
                <p>Loading...</p>
                :
                <div
                    className="px-4 mt-4"
                >
                    <LabelInput 
                        labelText={"Please enter your email address"}
                        inputType={"text"}
                        placeholderText={"Please enter your email address"}
                        inputName={"email"}
                        inputValidations={{
                            required: "Please enter a value",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Please enter a valid email address"
                            }
                        }}
                        errors={errors}
                        register={register}
                        divCss={"lg:grid lg:grid-cols-[1fr_2fr] gap-4 w-full border-b border-black/30 py-4"}
                        labelCss={"uppercase font-bold tracking-widest"}
                        inputCss={"border lg:w-120 text-center rounded-lg"}
                    />

                    <LabelInput 
                        labelText={"Please enter the amount you wish to donate"}
                        inputType={"text"}
                        placeholderText={"Enter Amount in ZAR"}
                        inputName={"amount"}
                        inputValidations={{
                            required: "Please enter a value from ZAR 0.01"
                        }}
                        errors={errors}
                        register={register}
                        divCss={"lg:grid lg:grid-cols-[1fr_2fr] gap-4 w-full mt-4"}
                        labelCss={"uppercase font-bold tracking-widest"}
                        inputCss={"border lg:w-120 text-center rounded-lg"}
                    />
                </div>
            }

            <button
                className="bg-green-500 text-white px-4 py-2 rounded w-40 self-center mt-10 uppercase cursor-pointer hover:-translate-y-2 duration-200 hover:shadow h-15"
            >
                Donate
            </button>
        </form>
    )
}