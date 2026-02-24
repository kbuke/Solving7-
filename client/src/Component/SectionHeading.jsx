export function SectionHeading({title}){
    return(
        <div
            className="grid grid-cols[2fr_3fr] lg:grid-cols-[1fr_2fr] lg:gap-4 items-center"
        >
            <h1
                className="uppercase text-3xl lg:text-6xl text-green-600"
            >
                {title}
            </h1>

            <div 
                className="bg-green-600 w-full h-4 lg:h-6"
            />
        </div>
    )
}