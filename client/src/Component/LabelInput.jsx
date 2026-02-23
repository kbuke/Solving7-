import { Controller } from "react-hook-form";
import { FormGroup } from "./FormGroup";

export function LabelInput({
    labelText,
    inputType,
    placeholderText,
    inputName,
    inputValidations,
    selectArray,

    // CSS Inputs
    marginTop,
    containerPaddingX,
    textareaCss,
    inputCss,
    labelCss,
    selectCss,
    optionCss,

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
                    className={labelCss}
                >
                    {labelText}
                </label>

                {inputType === "textarea"
                    ? <textarea 
                        placeholder={placeholderText}
                        className={`${textareaCss}`}
                        {...register(inputName, inputValidations)}
                    />
                    : inputType === "select"
                        ? <Controller 
                            name={inputName}    
                            control={control}
                            rules={inputValidations}
                            render={({field}) => (
                                <select
                                    {...field}
                                    className={selectCss}
                                >
                                    <option value="">
                                        {placeholderText}
                                    </option>

                                    {selectArray.map((option, index) => (
                                        <option
                                            key={index}
                                            value={option.value}
                                            className={optionCss}
                                        >
                                            {option.label}
                                        </option>
                                    ))}
                                </select>
                            )}
                        />
                    : <input 
                        type={inputType}
                        placeholder={placeholderText}
                        className={inputCss}
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