import { useOutletContext } from "react-router";
import { SectionHeading } from "../../Component/SectionHeading";
import { Link } from "react-router";

export function ProductsPg(){

    const appData = useOutletContext()

    const allProducts = appData?.allProducts


    return(
        <section
            className="mt-8 lg:mt-4 lg:px-6"
        >
            <SectionHeading title={"Products"} />

            <div
                className="py-10 px-4 lg:grid lg:grid-cols-3 lg:justify-items-center gap-4 lg:gap-10"
            >
                {allProducts?.map((product, index) => {
                    const productName = product?.name
                    const productId = product?.id

                    const productBaseImg = product?.base_img
                    const productCardImg = product?.card_img


                    return(
                        <>
                            {/* Mobile View */}
                            <Link
                                to={`/products/${productId}`}
                                className="flex lg:hidden bg-gray-400 mb-4 rounded-xl items-center gap-4 h-30"
                            >
                                <img 
                                    src={productBaseImg ? productBaseImg : `/ProductPics/${productName.replace(/\s+/g, "")}.png`}
                                    className="h-30 rounded"
                                    alt={`${productName}-img`}
                                />

                                <h1
                                    className="uppercase text-white font-bold tracking-widest text-xl"
                                >
                                    {productName}
                                </h1>
                            </Link>

                            {/* Desktop View */}
                            <Link
                                key={index}
                                to={`/products/${productId}`}
                                className="hidden lg:flex h-100 mb-4 lg:h-150 lg:w-100 rounded-xl hover:-translate-y-2 duration-200 hover:shadow-lg bg-center bg-no-repeat bg-cover"
                                style={{backgroundImage: `url(${productCardImg ? productCardImg : `/ProductCardImg/${productName.replace(/\s+/g, "")}.png`})`}}
                            >
                                <div
                                    className="w-full bg-black/60 text-white h-20 self-end flex items-center justify-center rounded-b-xl"
                                >
                                    <h1
                                        className="text-4xl"
                                    >
                                        {productName}
                                    </h1>
                                </div>
                            </Link>
                        </>
                    )
                })}
            </div>
        </section>
    )
}