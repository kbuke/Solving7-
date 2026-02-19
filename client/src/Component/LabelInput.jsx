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
    labelColour,
    containerPaddingX,
    inputBorder,
    textareaCss,

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
                className={`flex flex-col ${marginTop} ${containerPaddingX}`}
            >
                <label
                    className={`${labelColour} ${labelSize}`}
                >
                    {labelText}
                </label>

                {inputType === "textarea"
                    ? <textarea 
                        placeholder={placeholderText}
                        className={`${textareaCss}`}
                        {...register(inputName, inputValidations)}
                    />
                    : <input 
                        type={inputType}
                        placeholder={placeholderText}
                        className={`bg-white rounded ${inputHeight} pl-4 ${inputWidth} ${inputBorder}`}
                        {...register(inputName, inputValidations)}
                    />
                }
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