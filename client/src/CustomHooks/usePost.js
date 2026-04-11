export async function usePost({
    url,
    body,
    onSuccess,
    onError,
    setLoading,
    setCompleted,
    setEndActionState,
    credentials = "same-origin"
}) {
    setLoading?.(true)
    setCompleted?.(false)

    console.log(url)
    console.log(body)

    try {
        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials,
            body: JSON.stringify(body)
        })

        if (!res.ok) {
            const err = await res.json()
            throw new Error(err?.error || "Something went wrong")
        }

        const data = await res.json()

        onSuccess?.(data)

        setCompleted?.(true)

        if (setEndActionState) {
            setEndActionState(null)
        }

        return data

    } catch (err) {
        console.error(err)
        onError?.(err.message)
    } finally {
        setLoading?.(false)
    }
}

// export async function usePost({
//     url,
//     body,
//     onSuccess,
//     onError,
//     setLoading,
//     setCompleted,
//     setEndActionState,
//     credentials = "same-origin"
// }) {
//     const API = import.meta.env.VITE_API_URL || "";

//     const fullUrl = API
//         ? `${API}${url.startsWith("/") ? url : `/${url}`}`
//         : url;

//     setLoading?.(true);
//     setCompleted?.(false);

//     if (import.meta.env.DEV) {
//         console.log(fullUrl);
//         console.log(body);
//     }

//     try {
//         const res = await fetch(fullUrl, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             credentials,
//             body: JSON.stringify(body)
//         });

//         const data = await res.json();

//         if (!res.ok) {
//             throw new Error(data?.error || data?.message || "Something went wrong");
//         }

//         onSuccess?.(data);
//         setCompleted?.(true);

//         setEndActionState?.(null);

//         return data;

//     } catch (err) {
//         console.error(err);
//         onError?.(err.message || "Request failed");
//     } finally {
//         setLoading?.(false);
//     }
// }