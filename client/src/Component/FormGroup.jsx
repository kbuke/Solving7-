export function FormGroup({
    errorMessage = "",
    children,
    extraCss
}){
    return(
        <div className={`text-red-500 ${extraCss}`}>
            {children}
            {errorMessage.length > 0 && <div>{errorMessage}</div>}
        </div>
    )
}