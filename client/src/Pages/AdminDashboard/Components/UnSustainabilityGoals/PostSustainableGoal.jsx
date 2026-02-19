import { LabelInput } from "../../../../Component/LabelInput"

export function PostSustainableGoal({
    unGoals, setUnGoals, register, errors
}){
    return(
        <div>
            <LabelInput
                labelText={"UN Goal"}
                inputType={"text"}
                placeholderText={"Please Enter UN Goal"}
                inputName={"sustainableGoal"}
                inputValidations={{
                    required: "Please Enter a value",
                }}
                marginTop={"mt-5"}
                containerPaddingX={"px-4"}
                labelCss={"uppercase lg:text-2xl"}
                inputCss={"border rounded px-4 lg:w-[60%] lg:h-16"}
                errors={errors}
                register={register}
                formCss={"font-bold text-2xl"}
            />

            <LabelInput
                labelText={"Goal Info"}
                inputType={"textarea"}
                placeholderText={"Please Enter Goal Info"}
                inputName={"sustainableInfo"}
                inputValidations={{
                    required: "Please Enter a value",
                }}
                marginTop={"mt-5"}
                containerPaddingX={"px-4"}
                labelCss={"uppercase lg:text-2xl"}
                textareaCss={"border h-32 rounded px-4 lg:w-[60%]"}
                errors={errors}
                register={register}
                formCss={"font-bold text-2xl"}
            />
        </div>
    )
}