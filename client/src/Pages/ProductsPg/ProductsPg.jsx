import { useOutletContext } from "react-router";
import { SectionHeading } from "../../Component/SectionHeading";
import { RenderProductInfo } from "./Components/ProductInfo";

export function ProductsPg(){
    const appData = useOutletContext()

    const allProducts = appData?.allProducts

    console.log(allProducts)
    return(
        <section
            className="lg:mt-4 lg:px-6"
        >
            <SectionHeading title={"Products"} />

            {allProducts?.map((product, index) => (
                <RenderProductInfo 
                    {...product}
                    index={index}
                />
            ))}
        </section>
    )
}