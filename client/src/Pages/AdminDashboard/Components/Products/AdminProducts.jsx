import { AdminPopUpContents } from "../../../../Component/AdminPopUpContents"
import { ProductImg } from "../../../../Component/ProductImg"

export function AdminProducts({
    allProducts,
    setSelectedInstance, 
    setAction
}){
    return(
        allProducts?.map((product, index) => {
            const productName = product?.name
            const productId = product?.id
            const productInfo = product?.info
            const productImg = ProductImg(productName)

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
                    setSelectedInstance={setSelectedInstance}
                    setAction={setAction}
                />
            )
        })
    )
}