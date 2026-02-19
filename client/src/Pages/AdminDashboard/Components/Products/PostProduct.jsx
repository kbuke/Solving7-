import { LabelInput } from "../../../../Component/LabelInput"

export function PostProduct({
    allProducts, setAllProducts, errors, register
}){
    return(
        <div>
            <LabelInput
                labelText={"Product Name"}
                inputType={"text"}
                placeholderText={"Please Enter Product Name"}
                inputName={"productName"}
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
        </div>
    )
}