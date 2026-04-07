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
                className="py-10 px-4 flex flex-col lg:grid lg:grid-cols-3 lg:gap-10"
            >
                {allProducts?.map((product, index) => {
                    const productName = product?.name
                    const productId = product?.id

                    console.log(productName)
                    return(
                        <Link
                            key={index}
                            to={`/products/${productId}`}
                            className="h-140 w-80 mb-4 lg:h-170 lg:w-120 rounded-xl hover:-translate-y-2 duration-200 hover:shadow-lg bg-center bg-no-repeat bg-cover flex"
                            style={{backgroundImage: `url(${`/ProductCardImg/${productName.replace(/\s+/g, "")}.png`})`}}
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
                    )
                })}
            </div>
        </section>
    )
}