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
            className="bg-white h-[90%] w-[90%] py-4 px-20 rounded-xl overflow-y-auto"
        >
            <div
                className="flex justify-between items-center border-b pb-4"
            >
                <div>
                    <h1
                        className="uppercase text-5xl tracking-[4px] font-bold"
                    >
                        {articleHeading}
                    </h1>

                    <p>
                        {ConvertDate(articleDate)}
                    </p>
                </div>

                <FontAwesomeIcon 
                    icon={faCircleXmark}
                    className="text-5xl lg:rounded-full text-red-600/80 lg:cursor-pointer"
                    onClick={() => setSelectedArticle(null)}
                />
            </div>

            <div>
                <img 
                    src={articleImg}
                    alt={`${articleHeading}-img`}
                    className="float-right w-[45%] h-auto mb-4 rounded-lg object-cover"
                />

                <p>
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