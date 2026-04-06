import { useState } from "react"
import { SectionHeading } from "../../../Component/SectionHeading"
import { ConvertDate } from "../../../Component/ConvertDate"

export function NewsSection({ allNews, setSelectedArticle }) {
    const sortedNews = [...(allNews || [])].sort(
        (a, b) => new Date(b.posted) - new Date(a.posted)
    )

    // Ensure only first three articles are shown in mobile view
    const mobileNews = sortedNews.slice(0, 3)

    return (
        <section className="home-section bg-gray-600">
            <SectionHeading title={"News"} />

            {/* 📱 MOBILE VIEW (stacked, only 3) */}
            <div className="mt-4 flex flex-col gap-6 lg:hidden">
                {mobileNews.map((article, index) => (
                    <div
                        className="bg-white rounded cursor-pointer"
                        key={index}
                        onClick={() => setSelectedArticle(article)}
                    >
                        <img
                        src={article.img}
                        alt="article-img"
                        className="rounded-t h-60 w-full object-cover"
                        />

                        <h1 className="uppercase text-2xl tracking-widest text-center mt-4">
                        {article.title}
                        </h1>

                        <p className="text-center mb-4">
                        {ConvertDate(article.posted)}
                        </p>
                    </div>
                ))}
            </div>

            {/* 💻 DESKTOP VIEW (horizontal scroll) */}
            <div className="hidden lg:block mt-4 overflow-x-auto pb-4">
                <div className="flex gap-6">
                    {sortedNews.map((article, index) => (
                        <div
                            key={index}
                            className="bg-white rounded cursor-pointer shrink-0 w-[30%]"
                            onClick={() => setSelectedArticle(article)}
                        >
                            <img
                                src={article.img}
                                alt="article-img"
                                className="rounded-t h-72 w-full object-cover"
                            />

                            <h1 className="uppercase text-2xl tracking-widest text-center mt-4">
                                {article.title}
                            </h1>

                            <p className="text-center mb-4">
                                {ConvertDate(article.posted)}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
  )
}