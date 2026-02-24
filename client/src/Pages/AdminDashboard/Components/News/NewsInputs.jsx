import { DisplayCurrentValue } from "../../../../Component/DisplayCurrentValue"
import { LabelInput } from "../../../../Component/LabelInput"

import { EnsureUniqueness } from "../../../../Component/EnsureUniquness"

export function NewsInput({
    allNews,
    register,
    errors,
    reset,
    selectedInstance,
    isPatch
}){
    const patchNewsInputs = [
        {
            key: "newsTitle",
            accessor: "title"
        },

        {
            key: "newsImg",
            accessor: "img"
        },

        {
            key: "newsText",
            accessor: "text"
        }
    ]

    DisplayCurrentValue(isPatch, patchNewsInputs, selectedInstance, reset)

    return(
        <div>
            <LabelInput
                labelText={"Article Title"}
                inputType={"text"}
                placeholderText={"Please enter Article Title"}
                inputName={"newsTitle"}
                inputValidations={{
                    required: "Please Enter a value",
                    ...EnsureUniqueness({
                        allInstances: allNews,
                        variable: "title",
                        isPatch,
                        selectedInstance
                    })
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
                labelText={"Article Image"}
                inputType={"text"}
                placeholderText={"Please enter Article Image"}
                inputName={"newsImg"}
                inputValidations={{
                    required: "Please Enter a value"
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
                labelText={"Article Text"}
                inputType={"textarea"}
                placeholderText={"Please Enter Article Text"}
                inputName={"newsText"}
                inputValidations={{
                required: "Please enter a value",
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