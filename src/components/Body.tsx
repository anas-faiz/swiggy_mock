import { useState } from "react"
import Card from  "./Card"

const Body = ()=>{
    let [title,setTitle] = useState([])
    return(
        <div className="body-container">
        <div className="Search-box">
            <input type="search" name="" id="" />
            <button>Search</button>
        </div>
        <div className="card-container">
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
        </div>
        
        </div>

    )
}
export default Body