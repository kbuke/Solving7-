export function useDelete(url, setState, instanceId, setDelete){
    fetch(url, {
        method: "DELETE"
    })
        .then(r => {
            if(r.ok){
                setState(states => states.filter(state => state.id !== instanceId))
            }
        })
        .then(setDelete(null))
}

// import { useEffect } from "react";

// export function useDelete(url, setState, instanceId, setDelete) {
//     const API = import.meta.env.VITE_API_URL || "";

//     useEffect(() => {
//         const controller = new AbortController();

//         const fullUrl = API
//             ? `${API}${url.startsWith("/") ? url : `/${url}`}`
//             : url;

//         fetch(fullUrl, {
//             method: "DELETE",
//             signal: controller.signal
//         })
//             .then((r) => {
//                 if (!r.ok) throw r;

//                 setState((states) =>
//                     states.filter((state) => state.id !== instanceId)
//                 );

//                 setDelete(null);
//             })
//             .catch((e) => {
//                 if (e.name === "AbortError") return;
//                 console.error("Delete error:", e);
//             });

//         return () => controller.abort();
//     }, [url, instanceId]);
// }