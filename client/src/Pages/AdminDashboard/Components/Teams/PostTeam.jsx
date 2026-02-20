import { LabelInput } from "../../../../Component/LabelInput"

export function PostTeam({ allTeams, setAllTeams, register, errors }) {
  return (
    <div>
      <LabelInput
        labelText={"Team Name"}
        inputType={"text"}
        placeholderText={"Please Enter Team Name"}
        inputName={"teamName"}
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
        labelText={"Team Indo"}
        inputType={"textarea"}
        placeholderText={"Please Enter Team Info"}
        inputName={"teamInfo"}
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
