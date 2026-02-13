import ErrorImg from "../assets/error.jpeg"

export function ErrorMessage({error}){
    return (
        <>
        <div className="error-container h-screen flex flex-col items-center justify-center">
            <img className="error-image w-[10em]" src={ErrorImg} alt="Error" />
            <h2 className="max-sm:w-[70%]">{error}</h2>
        </div>
        </>
    )
}