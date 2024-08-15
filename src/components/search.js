import SearchIcon from "@mui/icons-material/Search"
import { useState } from "react";
function Search (props) {
    const [input,setInput]=useState("");
    function handleMovieName(e) {
        setInput(e.target.value);
    }
    function handleClick()
    {
        setInput(input.replace(/ /g,"%20"));
        input ? props.setMovieName(input): alert("Enter Input");
        setInput("");
    }
    function handleKeyDown(e)
    {
        if(e.key === "Enter")
        {
            handleClick();
        }
    }
    return (
        <div className="searchContainer">
            <input type="text" value={input} name="search-city" placeholder="Enter Movie Name" onChange={handleMovieName} onKeyDown={handleKeyDown}></input>
         <button onClick={handleClick}><SearchIcon sx={{fontSize: 40, color: "white", display: "flex", justifyContent: "center"}}/></button>   
         
        </div>
    )
}
export {Search};