export function DonateSection({
    setDonate
}){
   return(
    <section
        style={{
            backgroundImage: `url(${`/DonateBg.png`})`
        }}
        className="bg-center bg-no-repeat w-full h-140 bg-cover flex justify-center items-center"
    >
        <div
            className="bg-black/80 text-white w-[90%] lg:w-[70%] h-[70%] lg:h-[60%] p-4 rounded-xl lg:pr-160"
        >
            <h1
                className="uppercase tracking-widest text-4xl"
            >
                Donations
            </h1>

            <p>
                Solving7 and all those it works with would be extremely greatful for any donations possible to helping clean up our environment 
            </p>

            <button
                className="bg-green-600/90 p-4 uppercase rounded-lg mt-10 w-60 h-20 text-xl font-bold tracking-widest cursor-pointer hover:-translate-y-2 duration-200 hover:shadow animate-pulse"
                onClick={() => setDonate(true)}
            >
                Donate Here
            </button>
        </div>
    </section>
   ) 
}