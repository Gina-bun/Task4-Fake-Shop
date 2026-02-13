import ErrorImg from "../assets/error.jpeg"

export function ErrorMessage({error}){
    return (
        <>
        <div className="error-container h-screen flex flex-col items-center justify-center">
            <div className="w-64 aspect-square relative">
                 <img 
                 className="error-image w-full h-full object-contain" 
                 src={ErrorImg} 
                 alt="Error" 
                 />
            </div>
            <h2 className="max-sm:w-[70%]">{error}</h2>
        </div>
        </>
    )
}