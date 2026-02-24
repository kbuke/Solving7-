import { icon } from "@fortawesome/fontawesome-svg-core"
import { ProductImg } from "../../../Component/ProductImg"
import { SecondaryHeadings } from "../../../Component/SecondaryHeadings"

export function RenderProductInfo({
    info, 
    name, 
    material,
    state_of_world,
    progress,
    pillars,
    index
}){
    //Render product icons
    const productIcons = (icon) => {
        return(
            <img 
                src={`/productIcons/${icon}.png`}
                alt={`${icon}-image`}
                className="h-20"
            />
        )
    }

    const iconValueArray = [
        {
            icon: productIcons("world"),
            value: state_of_world
        },

        {
            icon: productIcons("info"),
            value: info
        },

        {
            icon: productIcons("progress"),
            value: progress
        },

        {
            icon: productIcons("material"),
            value: material
        }
    ]

    return(
        <div
            className="py-4"
        >
            <SecondaryHeadings 
                secondaryTitle={name}
            />

            <div
                className="grid grid-cols-2 py-4 gap-4"
            >
                <div>
                    {iconValueArray?.map((iVA, index) => {
                        return(
                            <div
                                key={index}
                                className="grid grid-cols-[1fr_3fr] py-2 px-4 items-center border-b border-black/40"
                            >
                                {iVA?.icon}
                                <p
                                    className="text-xl"
                                >
                                    {iVA?.value}
                                </p>
                            </div>
                        )
                    })}
                </div>

                <div>
                    <img 
                        src={ProductImg(name)}
                        alt={`${name}-image`}
                        className="rounded"
                    />

                    <div
                        className="flex justify-center mt-4"
                    >
                        <button
                            className="bg-blue-600 px-4 text-white rounded-lg lg:h-16 w-60 uppercase text-xl hover:-translate-y-2 duration-200 cursor-pointer"
                        >
                            More Images
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}