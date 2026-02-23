import { useEffect, useState } from "react";

export function CalcScreenWidth(){
    const [width, setWidth] = useState()

    useEffect(() => {
        window.addEventListener("resize", () => {
            setWidth(window.innerWidth)
        })
    }, [])

    return width
}