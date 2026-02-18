export function AdminPopUpContents({
    instanceImg,
    instanceName,
    instanceText
}){
    //Render the contents of all models onto the pop-up
    return(
        <div
            className="border-b border-black/60 p-2"
        >
            <div
                className="lg:px-10 lg:grid lg:grid-cols-[1fr_2fr] lg:gap-10"
            >
                <img 
                    src={instanceImg}
                    className="rounded lg:h-100"
                />

                <div
                    className="mt-2 lg:mt-0"
                >
                    <h1
                        className="
                            uppercase text-xl
                            lg:text-6xl lg:mb-4
                        "
                    >
                        {instanceName}
                    </h1>

                    {instanceText.map((text, index) => (
                        <div
                            className="grid grid-cols-[1fr_7fr] gap-4 mt-2"
                            key={index}
                        >
                            <label
                                className="font-bold"
                            >
                                {`${text.title}:`}
                            </label>

                            <p>
                                {text.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div
                className="flex justify-around mt-4 lg:mt-10"
            >
                <button
                    className="
                        px-4 rounded text-white bg-blue-600/60 w-[30%] h-8 uppercase cursor-pointer
                        lg:w-[10%] lg:h-15 lg:text-2xl hover:-translate-y-2 duration-200
                    "
                >
                    Edit
                </button>

                <button
                    className="
                        px-4 rounded text-white bg-red-600/80 w-[30%] h-8 uppercase cursor-pointer
                        lg:w-[10%] lg:h-15 lg:text-2xl hover:-translate-y-2 duration-200
                    "
                >
                    Delete
                </button>
            </div>
        </div>
    )
}