import "./SearchFilter.css"
import { Search } from "lucide-react"

export function SearchFilter({searchQuery, onSearchChange}){
    return (
        <>
            <div className="search-container">
                <input 
                className="input-search"
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search products by name..."
                 />
                 <Search className="search-icon pr-[0.6em]" size={30} color="black"/>
            </div>
        </>
    )
}