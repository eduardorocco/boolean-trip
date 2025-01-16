import { GlobalContext } from "./GlobalContext"
import { useContext } from "react"

export function Filter() {
    const { string, setString } = useContext(GlobalContext)

    function handleSearch(e) {
        console.log(e.target.value)
        setString(e.target.value)
    }

<<<<<<< HEAD
    return (
        <div>
            <input type="text" name="search" value={string} onChange={(e) => { handleSearch(e) }} />
        </div>
=======
    return(
     <div>
        <input type="text" name="search" placeholder="Cerca..." value={string} onChange={(e)=>{handleSearch(e)}}/>
     </div>   
>>>>>>> 360b9f38e37ed249ef7eec5a2063e85923139ea0
    )
}