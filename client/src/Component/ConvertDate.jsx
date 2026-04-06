export function ConvertDate(date){
    const dateObj = new Date(date)

    const getOrdinal = (day) => {
        if(day > 3 && day < 21) return "th"
        switch(day%10){
            case 1: return "st"
            case 2: return "nd"
            case 3: return "rd"
            default: return "th"
        }
    }

    const day = dateObj.getDate()
    const ordinal = getOrdinal(day)

    const month = dateObj.toLocaleDateString("en-ZA", {
        month: "long"
    })

    const year = dateObj.getFullYear()

    return `${month} ${day}${ordinal} ${year}`
}