export function DonateSection({
    setDonate
}){
   return(
    <section
        style={{
            backgroundImage: `url(${`/DonateBg.png`})`
        }}
        className="bg-center bg-no-repeat w-full h-140 bg-cover flex items-center justify-center"
    >
        <div
            className="bg-black/60 w-[95%] h-[95%] p-4 text-white rounded pr-180 flex flex-col justify-center"
        >
            <h1
                className="uppercase text-6xl tracking-[6px]"
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