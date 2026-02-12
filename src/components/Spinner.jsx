import { Spool } from "lucide-react"
import "./Spinner.css"

export function Spinner(){
    return (
        <>
        <div className="spinner-container">
            <Spool className="spinner animate-spin [animation-duration:1.5s]"/>
            <h2>Loading...</h2>
        </div>
        </>
    )
}