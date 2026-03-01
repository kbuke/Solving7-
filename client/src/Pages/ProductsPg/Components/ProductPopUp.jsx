import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

export function ProductPopUp({
    product,
    setSelectedProduct
}){
    const [selectedIcon, setSelectedIcon] = useState("info")
    console.log(product)
    const productName = product?.name
    const globalNeed = product?.state_of_world
    const productMaterial = product?.material
    const productInfo = product?.info
    const s7Progress = product?.progress
    const productPillars = product?.pillars

    const renderIcons = (icon) => {
        return(
            <img 
                src={`/productIcons/${icon}.png`}
                className={`h-15 cursor-pointer ${selectedIcon === icon && "bg-green-400 rounded-full h-15 w-15 p-2"}`}
                onClick={() => setSelectedIcon(icon)}
            />
        )
    }

    const infoObject = [
        {
            label: "info",
            title: "Product Info",
            text: productInfo
        },

        {
            label: "material",
            title: "Product Material",
            text: productMaterial
        },

        {
            label: "progress",
            title: "Solving7's Progress",
            text: s7Progress
        },

        {
            label: "world",
            title: "State of the World",
            text: globalNeed
        }
    ]

    const selectedInfo = infoObject.find(
        item => item.label === selectedIcon
    )

    return(
        <div
            className="h-[90%] lg:h-[75%] w-[97%] bg-white rounded lg:overflow-hidden
                lg:grid lg:grid-cols-[1fr_1fr] gap-10
            "
        >
            <div>
                <div
                    className="px-4 lg:px-0 border-b border-black/60 py-10 flex justify-between items-center"
                >
                    <h1
                        className="uppercase text-3xl lg:text-5xl tracking-[4px] ml-4"
                    >
                        {productName}
                    </h1>

                    <FontAwesomeIcon 
                        icon={faCircleXmark}
                        className="text-5xl lg:rounded-full text-red-600/80 lg:cursor-pointer"
                        onClick={() => setSelectedProduct(null)}
                    />
                </div>

                <img 
                    src={`ProductPics/${productName}.png`}
                    className="h-full mt-4 lg:hidden px-4 rounded"
                />

                <div
                    className="grid grid-cols-4 mt-4 items-center justify-items-center"
                >
                    {renderIcons("info")}
                    {renderIcons("material")}
                    {renderIcons("progress")}
                    {renderIcons("world")}
                </div>

                <div
                    className="mt-4 px-2"
                >
                    <h1
                        className="uppercase text-3xl"
                    >
                        {selectedInfo.title}
                    </h1>

                    <div
                        className="text-center mt-2"
                    >
                        <p>
                            {selectedInfo?.text}
                        </p>
                    </div>
                </div>
            </div>

            <div>
                <img 
                    src={`ProductPics/${productName}.png`}
                    className="h-full hidden lg:block"
                />
            </div>
        </div>
    )
}