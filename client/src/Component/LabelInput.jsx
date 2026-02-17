import { FormGroup } from "./FormGroup";

export function LabelInput({
    labelText,
    inputType,
    placeholderText,
    inputName,
    inputValidations,

    // CSS Inputs
    marginTop,
    inputHeight,
    inputWidth,
    labelSize,

    // Form imports
    errors,
    register,
    control,

    // Form error css
    formCss
}){
    return(
        <>
            <div
                className={`flex flex-col ${marginTop}`}
            >
                <label
                    className={`text-white ${labelSize}`}
                >
                    {labelText}
                </label>

                <input 
                    type={inputType}
                    placeholder={placeholderText}
                    className={`bg-white rounded ${inputHeight} pl-4 ${inputWidth}`}
                    {...register(inputName, inputValidations)}
                />
            </div>

            <div
                className="flex justify-start"
            >
                <FormGroup 
                    errorMessage={errors?.[inputName]?.message}
                    extraCss={formCss}
                />
            </div>
        </>
    )
}