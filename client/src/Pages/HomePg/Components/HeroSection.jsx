import backgroundImg from "/mobileHomeImg.jpg"
import mobileLogo from "/logoText.png"

export function HeroSection(){
    const heroVid = "/s7HeroVid.mp4"
    // const backgroundImg = `url("/mobileHomeImg.jpg")`


    return(
        <div
            className="lg:relative h-90 md:h-[4/5] lg:h-screen"
        >
            <div
                style={{backgroundImage: `url(${backgroundImg})`}}
                className="flex md:hidden h-full w-full bg-center bg-no-repeat bg-cover items-center"
            >
                <div
                    className="bg-black/60 w-full h-full flex items-center px-6 rounded"
                >
                    <img 
                        src={mobileLogo}
                        className="h-[40%]"
                    />
                </div>
            </div>

            <video
                autoPlay
                loop
                muted 
                playsInline
                className="hidden md:block absolute inset-0 w-full h-115 lg:h-full object-cover"
            >
                <source src={heroVid} type="video/mp4" />
            </video>

            <img 
                src={"/scrollDown.png"}
                className="bg-white rounded-full animate-pulse h-10 w-10 absolute bottom-4 justify-self-center hidden lg:block"
            />
        </div>
    )
}