import backgroundImg from "/mobileHomeImg.jpg"

export function HeroSection({
    screenWidth
}){
    const heroVid = "/s7HeroVid.mp4"
    // const backgroundImg = `url("/mobileHomeImg.jpg")`


    return(
        <div
            // style={{
            //     backgroundImage:
            //         screenWidth <= 767 ? backgroundImg : "none"
            // }}
            // className="relative h-screen md:h-[calc(100vh-7.5rem)] bg-center bg-no-repeat bg-cover overflow-hidden"
            className="lg:relative h-90 lg:h-screen"
        >
            <div
                style={{backgroundImage: `url(${backgroundImg})`}}
                className="block lg:hidden h-full w-full bg-center bg-no-repeat bg-cover"
            >

            </div>

            <video
                autoPlay
                loop
                muted 
                playsInline
                className="hidden lg:block absolute inset-0 w-full h-full object-cover"
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