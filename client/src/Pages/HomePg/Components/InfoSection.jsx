export function InfoSection(){

    const infoObject = (infoKey, infoValue, link=false) => {
        return(
            <div
                className="flex"
            >
                <p
                    className="text-white"
                >
                    <span className="font-bold">{infoKey}: </span>
                    {!link?infoValue:null}
                    {link?
                        <a
                            href={link}
                            className="underline"
                        >
                            {infoValue}
                        </a>
                        :
                        null
                    }
                </p>
            </div>
        )
    }
    return(
        <section
            className="home-section bg-gray-600 grid grid-cols-2 gap-8 lg:gap-0 lg:grid-cols-3 justify-center items-center"
        >
           <div>
                {infoObject("Address", "tester")}

                {infoObject("Phone Number", "00")}

                {infoObject("Email", "info@solving7.com", "mailto:info@s7.com")}
            </div> 

            <div>
                {infoObject("Linkedin", "@solving7", "https://www.linkedin.com/company/solving7/posts/?feedView=all")}

                {infoObject("Instagram", "@solving7", "https://www.instagram.com/solving7.green/")}

                {infoObject("Facebook", "@solving7", "https://www.facebook.com/solving7.green")}
            </div>

            <img 
                src="/logoBlack.png"
                className="h-40 hidden lg:block"
            />

        </section>
    )
}