export function SecondaryHeadings({secondaryTitle}){
    return(
        <div
            className="grid grid-cols-[1fr_2fr] gap-4 items-center"
        >
            <h1
                className="lg:text-3xl text-blue-600 uppercase"
            >
                {secondaryTitle}
            </h1>

            <div 
                className="bg-blue-600 w-full h-4"
            />
        </div>
    )
}