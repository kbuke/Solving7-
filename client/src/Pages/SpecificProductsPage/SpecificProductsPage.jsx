import { useState } from "react";
import { useParams } from "react-router";
import { useFetch } from "../../CustomHooks/useFetch";
import { PopUp } from "../../Component/PopUp";
import { LargeProductImg } from "./LargeProductImg";

export function SpecificProductsPage(){
    const [selectedProduct, setSelectedProduct] = useState([])
    const [selectedProductImg, setSelectedProductImg] = useState()

    const id = useParams()
    const selectedProductId = id?.id

    useFetch(`/api/products/${selectedProductId}`, setSelectedProduct)

    const productImages = selectedProduct?.images
    const productName = selectedProduct?.name
    const productState = selectedProduct?.state_of_world

    const productGrid = (
        productCat, 
        rightBorder
    ) => {
        return(
            <div
                className={`border-b py-4 border-black/30 lg:border-b-0 mb-10 lg:mb-0 ${rightBorder ? "lg:border-r lg:border-black/60 px-4 mt-4" : "px-4 mt-4"}`}
            >
                <img 
                    src={`/productIcons/${productCat}.png`}
                    className="h-20 justify-self-center self-center"
                />

                <p
                    className="uppercase font-bold text-center tracking-widest"
                >
                    {productCat}
                </p>

                <p className="text-black text-center mt-2">
                    {productCat === "world" ? productState : selectedProduct[productCat]}
                </p>
            </div>
        )
    }

    return(
        <section
            className="pt-14 lg:pt-6"
        >
            <h1
                className="text-3xl uppercase ml-2 tracking-widest lg:secondary-heading"
            >
                {productName}
            </h1>

            <div
                className="mt-8 flex flex-col lg:grid lg:grid-cols-4 gap-2"
            >
                {productGrid("info", true)}
                {productGrid("material", true)}
                {productGrid("progress", true)}
                {productGrid("world")}
            </div>

            <div className="bg-gray-500 lg:mt-4 text-white py-6 px-2 lg:px-0">
                <h1 className="secondary-heading text-3xl">
                    Images
                </h1>

                {/* MOBILE + TABLET (grid) */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6 lg:hidden">
                    {productImages?.map((pI, index) => (
                        <div
                            key={index}
                            className="cursor-pointer hover:-translate-y-2 duration-200 rounded w-full h-40 bg-center bg-no-repeat bg-cover"
                            style={{ backgroundImage: `url(${pI?.link})` }}
                            onClick={() => setSelectedProductImg(pI?.link)}
                        />
                    ))}
                </div>

                {/* DESKTOP (horizontal carousel) */}
                <div className="hidden lg:flex gap-4 mt-6 overflow-x-auto px-4">
                    {productImages?.map((pI, index) => (
                        <div
                            key={index}
                            className="min-w-75 h-40 cursor-pointer hover:-translate-y-2 duration-200 rounded bg-center bg-no-repeat bg-cover shrink-0"
                            style={{ backgroundImage: `url(${pI?.link})` }}
                            onClick={() => setSelectedProductImg(pI?.link)}
                        />
                    ))}
                </div>
            </div>

            {selectedProductImg &&
                <PopUp>
                    <LargeProductImg 
                        productLink={selectedProductImg}
                        setSelectedProductImg={setSelectedProductImg}
                    />
                </PopUp>
            }
        </section>
    )
}