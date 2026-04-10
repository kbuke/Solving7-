import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons"
import { ConvertDate } from "../../../Component/ConvertDate"

export function ArticlePopUp({
    selectedArticle,
    setSelectedArticle
}){
    console.log(selectedArticle)
    const articleText = selectedArticle?.text 
    const articleHeading = selectedArticle?.title
    const articleImg = selectedArticle?.img 
    const articleDate = selectedArticle?.posted
    return(
        <div
            className="bg-white h-[90%] w-[90%] lg:py-4 lg:px-20 rounded-xl overflow-y-auto"
        >
            <div
                className="lg:flex lg:justify-between items-center border-b pb-4"
            >
                <img 
                    src={articleImg}
                    className="w-full rounded-t-xl lg:hidden"
                />

                <div>
                    <h1
                        className="uppercase text-5xl tracking-[4px] font-bold px-4"
                    >
                        {articleHeading}
                    </h1>

                    <p
                        className="text-lg mt-0 lg:px-4 lg:mt-6 lg:text-xl"
                    >
                        {ConvertDate(articleDate)}
                    </p>
                </div>

                <div
                    className="hidden lg:block"
                >
                    <FontAwesomeIcon 
                        icon={faCircleXmark}
                        className="lg:block text-5xl lg:rounded-full text-red-600/80 lg:cursor-pointer"
                        onClick={() => setSelectedArticle(null)}
                    />
                </div>
            </div>

            <div>
                <img 
                    src={articleImg}
                    alt={`${articleHeading}-img`}
                    className="float-right w-[45%] h-auto mb-4 rounded-lg object-cover hidden lg:block"
                />

                <p
                    className="text-lg mt-0 px-1 lg:px-4 lg:mt-6 lg:text-xl"
                >
                    {articleText}
                </p>
            </div>

            <div
                className="flex justify-center mt-4"
            >
                <button
                    className="bg-red-500 p-4 rounded-lg text-white cursor-pointer uppercase w-40 hover:-translate-y-2 duration-200 hover:shadow"
                    onClick={() => setSelectedArticle(null)}
                >
                    Close
                </button>
            </div>
        </div>
    )
}