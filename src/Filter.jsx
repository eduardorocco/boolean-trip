import { GlobalContext } from "./GlobalContext"
import { useContext } from "react"

export function Filter(){
    const { string, setString } = useContext(GlobalContext)

    function handleSearch(e){
        console.log(e.target.value)
        setString(e.target.value)  
    }

    return(
     <div>
        <input type="text" name="search" value={string} onChange={(e)=>{handleSearch(e)}}/>
     </div>   
    )
}