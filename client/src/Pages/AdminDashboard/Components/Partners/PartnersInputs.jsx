import { DisplayCurrentValue } from "../../../../Component/DisplayCurrentValue";
import { LabelInput } from "../../../../Component/LabelInput";

import { EnsureUniqueness } from "../../../../Component/EnsureUniquness";

export function PartnersInput({
    allPartners,
    register,
    errors,
    reset,
    selectedInstance,
    isPatch
}){
    const patchPartnersInputs = [
        {
            key: "partnerName",
            accessor: "title"
        },

        {
            key: "partnerLogo",
            accessor: "img"
        }
    ]

    DisplayCurrentValue(isPatch, patchPartnersInputs, selectedInstance, reset)

    return(
        <div>
            <LabelInput 
                labelText={"Partner Name"}
                inputType={"text"}
                placeholderText={"Please enter partner name"}
                inputName={"partnerName"}
                inputValidations={{
                    required: "Please Enter a value",
                    ...EnsureUniqueness({
                        allInstances: allPartners,
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
        </div>
    )
}