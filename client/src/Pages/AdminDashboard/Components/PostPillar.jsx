import { LabelInput } from "../../../Component/LabelInput";

export function PostPillar({
    allPillars, setAllPillars, register, errors
}){
    return(
        <div>
            <LabelInput 
                labelText={"Pillar"}
                inputType={"text"}
                placeholderText={"Please enter Pillar"}
                inputName={"pillarName"}
                inputValidations={{
                    required: "Please Enter a value"
                }}

                marginTop={"mt-5"}
                containerPaddingX={"px-4"}
                inputCss={"border rounded px-4"}

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
                    required: "Please enter a value"
                }}

                marginTop={"mt-5"}
                containerPaddingX={"px-4"}
                textareaCss={"border h-32 rounded px-4"}

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
                    required: "Please enter a value"
                }}
                marginTop={"mt-5"}
                containerPaddingX={"px-4"}
                textareaCss={"border h-32 rounded px-4"}

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
                    required: "Please enter a value"
                }}

                marginTop={"mt-5"}
                containerPaddingX={"px-4"}
                textareaCss={"border h-32 rounded px-4"}
                
                errors={errors}
                register={register}
                formCss={"font-bold text-2xl"}
            />
        </div>
    )
}