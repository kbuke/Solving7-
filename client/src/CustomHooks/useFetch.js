import { useEffect } from "react";

export function useFetch(url, setState, dependancies=[]){
    const API = import.meta.env.VITE_API_URL || ""

    useEffect(() => {
        const controller = new AbortController()

        const fullUrl = API
            ? `${API}${url.startsWith("/") ? url : `/${url}`}`
            : url;

        fetch(fullUrl, {signal: controller.signal})
        .then(r => {
            if(r.ok){
                return r.json()
            }
            throw r
        })
        .then(instances => setState(instances))

        .catch(e => {
            if(e.name === "AbortError") return;
            console.error("Fetch error:", e);
        })
        return () => {
            controller.abort()
        }
    }, [url, ...dependancies])
}