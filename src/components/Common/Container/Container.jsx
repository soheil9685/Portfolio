function Container({ children , className = "" }) {
    return (
        <div className={`mx-auto px-3.75 sm:px-0 w-full sm:w-135 md:w-180 lg:w-240 xl:w-285 2xl:w-330 grid grid-cols-12 ${className}`}>
            { children }
        </div>
    )
}

export default Container