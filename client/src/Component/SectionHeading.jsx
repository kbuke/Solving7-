export function SectionHeading({title, additionalCss}){
    return(
        <div
            // className="grid grid-cols[2fr_3fr] lg:grid-cols-[1fr_2fr] lg:gap-4 items-center"
            className={`mb-4 ${additionalCss}`}
        >
            <h1
                className={`uppercase text-3xl lg:text-6xl text-green-600`}
            >
                {title}
            </h1>

            <div 
                className={`bg-green-600 w-full h-4 lg:h-6`}
            />
        </div>
    )
}