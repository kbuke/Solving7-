import { AdminPopUpContents } from "../../../../Component/AdminPopUpContents";

export function AdminNews({
    allNews,
    setSelectedInstance,
    setAction
}){
    return(
        allNews?.map((article, index) => {
            const articleTitle = article?.title
            const articleImg = article?.img
            const articleText = article?.text

            return(
                <AdminPopUpContents 
                    key={index}
                    instance={article}
                    instanceImg={articleImg}
                    instanceName={articleTitle}
                    instanceText={[
                        {
                            title: "Text",
                            text: articleText
                        }
                    ]}
                    setSelectedInstance={setSelectedInstance}
                    setAction={setAction}
                />
            )
        })
    )
}