import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDelete } from "../../../../CustomHooks/useDelete";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons"

export function DeleteProductPillar({
    allProductPillars,
    setAllProductPillars,
    selectedProductId,
    setSelectedProductId,
    selectedPillarId, 
    setSelecredPillarId,
    setProductPillarAction
}){
    const [selectedProductPillar, setSelectedProductPillar] = useState()

    const {
        handleSubmit,
        formState: {errors}
    } = useForm()

    useEffect(() => (
        setSelectedProductPillar(allProductPillars.filter(pp => pp.pillar_id === selectedPillarId && pp.product_id === selectedProductId))
    ), [])

    const deleteInstanceId = selectedProductPillar?.[0].id

    const handleDeleteProductPillar = () => {
        useDelete(
            `/api/productpillar/${deleteInstanceId}`,
            setAllProductPillars,
            deleteInstanceId,
            setProductPillarAction
        )
    }

    return(
        <form
            onSubmit={handleSubmit(handleDeleteProductPillar)}
        >
            <div className="flex gap-4 px-4 py-2 items-center border-b border-dashed">
                <FontAwesomeIcon
                    icon={faChevronCircleLeft}
                    className="text-2xl text-blue-600"
                    onClick={() => {
                        setProductPillarAction()
                        setSelecredPillarId()
                        setSelectedProductId()
                    }}
                />

                <h1 className="text-2xl uppercase">Delete</h1>
            </div>

            <div
                className="flex justify-center mt-4"
            >
                <button
                    type="submit"
                    className="bg-red-600/80 px-4 w-[40%] h-12 uppercase text-white rounded"
                >
                    Delete
                </button>
            </div>
        </form>
    )
}