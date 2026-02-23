import { DisplayCurrentValue } from "../../../../Component/DisplayCurrentValue"
import { LabelInput } from "../../../../Component/LabelInput"

export function EmployeeInput({
    allEmployees,
    setAllEmployees,
    register,
    errors,
    reset,
    selectedInstance,
    isPatch,
    allTeams,
    control
}){
    const teamOptions = allTeams?.map(team => (
        {
            label: team?.name,
            value: team?.id
        }
    ))

    const patchEmployeeInput = [
        {
            key: "memberName",
            accessor: "name"
        },

        {
            key: "memberPosition",
            accessor: "position"
        },

        {
            key: "memberIntro",
            accessor: "intro"
        },

        {
            key: "teamId",
            accessor: "team_id"
        }
    ]

    DisplayCurrentValue(isPatch, patchEmployeeInput, selectedInstance, reset)

    return(
       <div>
            <LabelInput
                labelText={"Member Name"}
                inputType={"text"}
                placeholderText={"Please Enter Member Name"}
                inputName={"memberName"}
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
                labelText={"Member Position"}
                inputType={"textarea"}
                placeholderText={"Please Enter Member Position"}
                inputName={"memberPosition"}
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

            <LabelInput
                labelText={"Member Intro"}
                inputType={"textarea"}
                placeholderText={"Please Enter Member Intro"}
                inputName={"memberIntro"}
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
                labelText={"Select Members Team"}
                inputType={"select"}
                placeholderText={"Please select members team"}
                inputName={"teamId"}
                inputValidations={{
                    required: "Please select a value"
                }}
                selectArray={teamOptions}
                marginTop={"mt-5"}
                containerPaddingX={"px-4"}
                selectCss={"border w-full h-10 lg:w-[60%] lg:h-16"}
                optionCss={"bg-white"}
                errors={errors}
                register={register}
                control={control}
            />
        </div> 
    )
}