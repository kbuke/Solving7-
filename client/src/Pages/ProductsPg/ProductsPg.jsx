import { useOutletContext } from "react-router";
import { SectionHeading } from "../../Component/SectionHeading";
import { ProductCard } from "./Components/ProductCards";
import React, { useState } from "react";
import { ProductPopUp } from "./Components/ProductPopUp";
import {PopUp} from "../../Component/PopUp"
// import { RenderProductInfo } from "./Components/ProductInfo";

export function ProductsPg(){
    const [selectedProduct, setSelectedProduct] = useState(null)

    const appData = useOutletContext()

    const allProducts = appData?.allProducts

    return(
        <section
            className="mt-8 lg:mt-4 lg:px-6"
        >
            <SectionHeading title={"Products"} />

            <div
                className="py-10 
                    px-4
                    lg:grid lg:grid-cols-3 lg:gap-10"
            >
                {allProducts?.map((product, index) => {
                    return(
                        <React.Fragment
                            key={index}
                        >
                            <ProductCard 
                                product={product}
                                setSelectedProduct={setSelectedProduct}
                            />
                        </React.Fragment>
                    )
                })}
            </div>

            {selectedProduct &&
                 <PopUp>
                    <ProductPopUp 
                        product={selectedProduct}
                        setSelectedProduct={setSelectedProduct}
                    />
                </PopUp>
            }
        </section>
    )
}