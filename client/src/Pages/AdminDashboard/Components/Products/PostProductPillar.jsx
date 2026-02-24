import { useForm } from "react-hook-form";
import { usePost } from "../../../../CustomHooks/usePost";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons"
import { Controller } from "react-hook-form";

export function PostProductPillar({
    setAllProductPillars,
    setProductPillarAction,
    allPillars,
    selectedProduct,
    setSelectedProduct,
    setLoading
}){
    const {
        handleSubmit,
        control,
        formState: {errors}
    } = useForm()

    const productName = selectedProduct?.name
    const productId = selectedProduct?.id
    const productPillars = selectedProduct?.pillars

    const availableProductOptions = allPillars
        ?.filter(pillar => 
            !productPillars?.some(
                assignedPillar => assignedPillar.id === pillar.id
            )
        )
        ?.map(pillar => ({
            label: pillar.name,
            value: pillar.id
    }))

    const handleProductPillarPost = (formData) => {
        console.log(formData)
        const postData = {
            productId: productId,
            pillarId: formData?.productPillars
        }
        usePost({
            url: "/api/productpillar",
            body: postData,
            credentials: "include",
            setLoading: setLoading,
            onSuccess: (newProductPillar) => {
                setAllProductPillars(prev => [...prev, newProductPillar])
                setSelectedProduct()
                setProductPillarAction()
            }
        })
    }

    return(
        <form
            onSubmit={handleSubmit(handleProductPillarPost)}
        >
            <div className="flex gap-4 px-4 py-2 items-center border-b border-dashed">
                <FontAwesomeIcon
                    icon={faChevronCircleLeft}
                    className="text-2xl text-blue-600 cursor-pointer"
                    onClick={() => {
                        setProductPillarAction(false)
                        setSelectedProduct()
                    }}
                />

                <h1 className="text-2xl uppercase">Add New Pillar for {productName}</h1>
            </div>

            <div
                className="flex justify-center mt-4"
            >
                <Controller 
                    name={"productPillars"}
                    control={control}
                    render={({field}) => (
                        <select
                            {...field}
                            className="border rounded lg:h-16 text-center lg:text-2xl"
                        >
                            <option
                                value=""
                            >
                                Select a Pillar
                            </option>

                            {availableProductOptions.map((option, index) => (
                                <option
                                    key={index}
                                    value={option.value}
                                    className=""
                                >
                                    {option?.label}
                                </option>
                            ))}
                        </select>
                    )}
                />
            </div>

            <div
                className="flex justify-center lg:mt-10"
            >
                <button
                    className="bg-green-600/80 cursor-pointer text-white px-4 rounded hover:-translate-y-2 duration-200 lg:h-16 lg:w-[20%] lg:text-4xl uppercase"
                >
                    Submit
                </button>
            </div>
        </form>
    )
}