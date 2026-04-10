// export function usePatch(
//   body,
//   url,
//   id,
//   setArray,
//   setAction
// ){
//     fetch(url, {
//         method: "PATCH",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(body)
//     })
//         .then(res => res.json())
//         .then(updatedItem => {
//         setArray(prev =>
//             prev.map(item =>
//             item.id === id ? updatedItem : item
//             )
//         );

//         setAction(null);
//         });
// }

export async function usePatch(
    body,
    url,
    id,
    setArray,
    setAction
) {
    const API = import.meta.env.VITE_API_URL || "";

    const fullUrl = API
        ? `${API}${url.startsWith("/") ? url : `/${url}`}`
        : url;

    try {
        const res = await fetch(fullUrl, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        });

        if (!res.ok) throw new Error("Failed to update item");

        const updatedItem = await res.json();

        setArray(prev =>
            prev.map(item =>
                item.id === id ? updatedItem : item
            )
        );

        setAction(null);
    } catch (err) {
        console.error("PATCH error:", err);
    }
}