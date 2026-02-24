import { DisplayCurrentValue } from "../../../../Component/DisplayCurrentValue"
import { EnsureUniqueness } from "../../../../Component/EnsureUniquness"
import { LabelInput } from "../../../../Component/LabelInput"

export function ProductInput({
    allProducts,
    setAllProducts,
    register,
    errors,
    reset,
    selectedInstance,
    isPatch
}){
    const patchProductInputs = [
        {
            key: "productName",
            accessor: "name"
        },

        {
            key: "productInfo",
            accessor: "info"
        },

        {
            key: "stateOfWorld",
            accessor: "state_of_world"
        },

        {
            key: "productMaterial",
            accessor: "material"
        },

        {
            key: "productProgress",
            accessor: "progress"
        }
    ]

    DisplayCurrentValue(isPatch, patchProductInputs, selectedInstance, reset)

    return(
        <div>
            <LabelInput
                labelText={"Product Name"}
                inputType={"text"}
                placeholderText={"Please Enter Product Name"}
                inputName={"productName"}
                inputValidations={{
                    required: "Please Enter a value",
                    ...EnsureUniqueness({
                        allInstances: allProducts,
                        variable: "name",
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
                labelText={"Product Info"}
                inputType={"textarea"}
                placeholderText={"Please Enter Product Info"}
                inputName={"productInfo"}
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

            <LabelInput
                labelText={"Current Global State"}
                inputType={"textarea"}
                placeholderText={"Please Enter Info on State of World"}
                inputName={"stateOfWorld"}
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

            <LabelInput
                labelText={"S7's Current Progress"}
                inputType={"textarea"}
                placeholderText={"Please Enter S7's Progress with Product"}
                inputName={"productProgress"}
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

            <LabelInput
                labelText={"Products Material"}
                inputType={"textarea"}
                placeholderText={"Please Enter the Material that goes in this product"}
                inputName={"productMaterial"}
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