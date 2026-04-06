import { SectionHeading } from "../../../Component/SectionHeading";

export function SkyNews(){
    return(
        <div
            className="flex flex-col"
        >
            <div
                className="mb-4 px-24"
            >
                <h1
                    className="uppercase text-3xl lg:text-6xl text-green-600"
                >
                    See us on Sky News
                </h1>

                <div 
                    className="bg-green-600 w-full h-4 lg:h-6"
                />
            </div>

            <video
                controls
                preload="none"
                className="h-160 w-340 self-center rounded"
                poster="/skyNewsPoster.png"
            >
                <source 
                    src="/skyNews.mp4"
                    type="video/mp4"
                />
                Your browser does not support video
            </video>
        </div>
    )
}