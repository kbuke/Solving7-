import { SectionHeading } from "../../../Component/SectionHeading";

export function NewsSection({
    allNews
}){
    console.log(allNews)
    return(
        <section
            className="home-section"
        >
            <SectionHeading 
                title={"News"}
            />

            <div
                className="mt-4 lg:grid lg:grid-cols-3 border-b"
            >
                {allNews?.map((article, index) => {
                    const articleHeading = article?.title
                    const articleDate = article?.posted
                    const articleImg = article?.img

                    return(
                        <div
                            className="rounded"
                            key={index}
                        >
                            <img 
                                src={articleImg}
                                className="rounded-t"
                            />

                            <div
                                className="lg:grid lg:grid-cols-[2fr_1fr] items-center"
                            >
                                <h1
                                    className="uppercase text-3xl"
                                >
                                    {articleHeading}
                                </h1>

                                <div>
                                    <p className="font-bold">
                                        Date Posted
                                    </p>

                                    <p>
                                        {articleDate}
                                    </p>
                                </div>
                            </div>

                            <div
                                className="flex justify-center py-4"
                            >
                                <button
                                    className="px-3 bg-blue-600 text-white rounded hover:-translate-y-2 duration-200 h-15 w-35 cursor-pointer uppercase"
                                >
                                    More Info
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}