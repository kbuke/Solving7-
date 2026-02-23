import { LabelInput } from "../../../../Component/LabelInput";
import { DisplayCurrentValue } from "../../../../Component/DisplayCurrentValue";

export function PillarInput({
    allPillars,
    setAllPillars,
    register,
    errors,
    reset,
    selectedInstance,
    isPatch
}){
    const patchPillarInputs = [
        {
            key: "pillarName",
            accessor: "name"
        },

        {
            key: "pillarChallenge",
            accessor: "challenge"
        },

        {
            key: "pillarOffering",
            accessor: "offering"
        },

        {
            key: "pillarSuccess",
            accessor: "success"
        }
    ]

    DisplayCurrentValue(isPatch, patchPillarInputs, selectedInstance, reset)

    return(
        <div>
            <LabelInput
                labelText={"Pillar"}
                inputType={"text"}
                placeholderText={"Please enter Pillar"}
                inputName={"pillarName"}
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
                labelText={"Challenge"}
                inputType={"textarea"}
                placeholderText={"Please Enter Pillar Challenge"}
                inputName={"pillarChallenge"}
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
                labelText={"Offering"}
                inputType={"textarea"}
                placeholderText={"Please Enter Pillar Offering"}
                inputName={"pillarOffering"}
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
                labelText={"Success"}
                inputType={"textarea"}
                placeholderText={"Please Enter Pillar Success"}
                inputName={"pillarSuccess"}
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