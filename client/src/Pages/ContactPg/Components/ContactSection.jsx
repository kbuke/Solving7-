import { PostEmail } from "./PostEmail";

export function ContactSection({
    allEmails,
    setAllEmails
}){
    return(
        <div
            style={{backgroundImage: `url(${"/bg-doodle.png"})`}}
            className="px-20 py-6 bg-no-repeat bg-center bg-cover bg-black"
        >
            <h1
                className="uppercase font-bold text-5xl tracking-widest"
            >
                Contact Us
            </h1>

            <PostEmail 
                allEmails={allEmails}
                setAllEmails={setAllEmails}
            />
        </div>
    )
}