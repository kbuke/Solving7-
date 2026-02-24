import { useForm } from "react-hook-form";
import { LabelInput } from "../../../Component/LabelInput";
import { useState } from "react";
import { usePost } from "../../../CustomHooks/usePost";
import { LoadingIcon } from "../../../Component/LoadingIcon";

export function PostEmail({
    allEmails,
    setAllEmails
}){
    const [sendingEmail, setSendingEmail] = useState(false)
    const [emailSent, setEmailSent] = useState(false)
    const {
        handleSubmit, 
        register,
        formState: {errors}
    } = useForm()

    const handleEmailPost = (formData) => {
        usePost({
            url: "/api/emails",
            body: formData,
            credentials: "include",
            setLoading: setSendingEmail,
            onSuccess: (newEmail) => {
                setAllEmails(prev => [...prev, newEmail])
                setSendingEmail(false)
                setEmailSent(true)
            }
        })
    }

    return(
        <form
            className="
                rounded mt-4 bg-gray-500/80 px-4 py-10
            "
            onSubmit={handleSubmit(handleEmailPost)}
        >
            {emailSent
                ?<div
                    className="bg-green-600/60 h-22 w-[35%] rounded-lg flex flex-col tems-center justify-center px-2"
                >
                    <h1
                        className="uppercase text-white text-xl font-bold"
                    >
                        Email Sent
                    </h1>

                    <p
                        className="text-white"
                    >
                        Thank you for your message. We'll get back to you soon.
                    </p>
                </div>
                : sendingEmail?
                <LoadingIcon />
                :
                <>
                    <h1
                        className="uppercase text-white font-bold text-3xl"
                    >
                        Send Us An Email
                    </h1>

                    <LabelInput 
                        labelText={"Your Email Address"}
                        inputType={"text"}
                        placeholderText={"Please Enter Your Email Address"}
                        inputName={"senderEmail"}
                        inputValidations={{
                            required: "Please Enter a value",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Please enter a valid email address"
                            }
                        }}
                        marginTop={"mt-5"}
                        labelCss={"uppercase text-white text-lg"}
                        inputCss={"rounded px-4 h-10 bg-white"}
                        errors={errors}
                        register={register}
                    />

                    <LabelInput 
                        labelText={"Email Subject"}
                        inputType={"text"}
                        placeholderText={"Please Enter Email Subject"}
                        inputName={"emailSubject"}
                        inputValidations={{
                            required: "Please Enter a value"
                        }}
                        marginTop={"mt-5"}
                        labelCss={"uppercase text-white text-lg"}
                        inputCss={"rounded px-4 h-10 bg-white"}
                        errors={errors}
                        register={register}
                    />

                    <LabelInput 
                        labelText={"Your Message"}
                        inputType={"textarea"}
                        placeholderText={"Please Enter Your Message"}
                        inputName={"emailMessage"}
                        inputValidations={{
                            required: "Please Enter a value"
                        }}
                        marginTop={"mt-5"}
                        labelCss={"uppercase text-white text-lg"}
                        textareaCss={"bg-white rounded px-4 h-25"}
                        errors={errors}
                        register={register}
                    />

                    <div
                        className="mt-4 flex justify-center"
                    >
                        <button
                            className="bg-green-600/90 text-white px-4 rounded-lg h-14 w-40 hover:-translate-y-2 duration-200 cursor-pointer"
                        >
                            Send Email
                        </button>
                    </div>
                </>
            }
        </form>
    )
}