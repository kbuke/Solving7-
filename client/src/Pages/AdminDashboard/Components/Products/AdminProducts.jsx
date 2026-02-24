import { useState } from "react"
import { AdminPopUpContents } from "../../../../Component/AdminPopUpContents"
import { ProductImg } from "../../../../Component/ProductImg"
import { useOutletContext } from "react-router"
import { DeleteProductPillar } from "./DeleteProductPillar"

export function AdminProducts({
    allProducts,
    setSelectedInstance, 
    setAction
}){
    const [productPillarAction, setProductPillarAction] = useState()
    const [selectedProduct, setSelectedProduct] = useState()
    const [selectedPillarId, setSelectedPillarId] = useState()
    const [selectedProductId, setSelectedProductId] = useState()

    const appData = useOutletContext()

    const allProductPillars = appData?.allProductPillars
    const setAllProductPillars = appData?.setAllProductPillars

    const setLoading = appData?.setLoading

    return(
        productPillarAction === "delete"
            ? <DeleteProductPillar 
                allProductPillars={allProductPillars}
                setAllProductPillars={setAllProductPillars}
                selectedProductId={selectedProductId}
                selectedPillarId={selectedPillarId}
                setSelecredPillarId={setSelectedPillarId}
                setProductPillarAction={setProductPillarAction}
            />
            : allProducts?.map((product, index) => {
                console.log(product)
                const productName = product?.name
                const productId = product?.id
                const productInfo = product?.info
                const productImg = ProductImg(productName)

                const productPillars = product?.pillars

                const renderProductPillars = () => {
                    return(
                        productPillars?.map((pP, index) => {
                            return(
                                <div
                                    key={index}
                                    className="flex gap-10 lg:text-xl mt-4 justify-around items-center"
                                >
                                    <p>
                                        Pillar: {pP?.id}
                                    </p>

                                    <p>
                                        {pP?.name}
                                    </p>

                                    <button
                                        className="px-2 bg-red-600 rounded text-white w-[30%] h-8 lg:w-[15%] cursor-pointer hover:-translate-y-2 duration-200"
                                        onClick={() => {
                                            setSelectedPillarId(pP?.id)
                                            setSelectedProductId(productId)
                                            setProductPillarAction("delete")
                                        }}
                                    >
                                        Delete
                                    </button>
                                </div>
                            )
                        })
                    )
                }

            return(
                <AdminPopUpContents 
                    key={index}
                    instance={product}
                    instanceImg={productImg}
                    instanceName={productName}
                    instanceText={[
                        {
                            title: "Info",
                            text: productInfo
                        }
                    ]}
                    relationInstances={renderProductPillars}
                    relationType={"Product Pillars"}
                    setPostRelation={setProductPillarAction}
                    setSelectedInstanceRelation={setSelectedProduct}
                    setSelectedInstance={setSelectedInstance}
                    setAction={setAction}
                />
            )
        })
    )
}