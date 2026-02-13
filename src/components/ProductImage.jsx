import {useState} from "react"

export function ProductImage({src, alt}){
    const [loaded, setLoaded] = useState(false)

    return (
        <>
           <div className="relative w-full aspect-square overflow-hidden bg-gray-200 rounded-md">
            {/* placeholder for image */}
            {!loaded && (
                <div className="absolute inset-0 animate-pulse bg-gray-400">   
                </div>
            )}

            {/* Actual Image */}
            <img
              src={src}
              alt={alt}
              loading="lazy"
              decoding="async"
              onLoad={() => setLoaded(true)}
              className={`rounded-md h-full w-full object-cover transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
            />
           </div>
        </>
    )
}