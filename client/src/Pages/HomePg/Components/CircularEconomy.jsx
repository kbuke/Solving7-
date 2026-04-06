import circularImg from "../../../../public/CircularEcon.png"
import { SectionHeading } from "../../../Component/SectionHeading"

export function CircularEconomy(){
    return(
        <section
            className="flex justify-center"
        >
            <img 
                src={circularImg}
                className="w-full"
            />
        </section>
    )
}