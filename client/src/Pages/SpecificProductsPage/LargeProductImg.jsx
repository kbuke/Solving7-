import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons"

export function LargeProductImg({
    productLink,
    setSelectedProductImg
}){
    return(
        <>
            <div
                style={{backgroundImage: `url(${productLink})`}}
                className="h-[50%] w-[90%] bg-center bg-no-repeat bg-cover lg:h-[90%] lg:w-[90%] rounded-xl flex flex-col"
            >
                <FontAwesomeIcon 
                    icon={faCircleXmark}
                    className="text-5xl lg:rounded-full text-red-600/80 lg:cursor-pointer mt-4 self-end"
                    onClick={() => setSelectedProductImg(null)}
                />
            </div>
        </>
    )
}