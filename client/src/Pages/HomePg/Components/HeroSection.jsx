export function HeroSection({
    screenWidth
}){
    const heroVid = "/s7HeroVid.mp4"
    const backgroundImg = `url("/mobileHero.png")`


    return(
        <div
            style={{
                backgroundImage:
                    screenWidth <= 767 ? backgroundImg : "none"
            }}
            className="relative h-screen md:h-[calc(100vh-7.5rem)] bg-center bg-no-repeat bg-cover overflow-hidden"
        >
            <video
                autoPlay
                loop
                muted 
                playsInline
                className="hidden md:block absolute inset-0 w-full h-full object-cover"
            >
                <source src={heroVid} type="video/mp4" />
            </video>
        </div>
    )
}