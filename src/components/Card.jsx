import { useState, useEffect } from "react";


const Card = ({name,description,price,rating,image})=>{

 
//console.log(resData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

//const path = resData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.name
  //  console.log(path)
    return(
        <div className="card">
                <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+image}/>
                <div className="content-list">
                    <ul>
                        <li><strong>{name}</strong></li>
                        <li>{price}</li>
                        <li>{rating}👍</li>
                        <li>{description.join(",")}</li>
                    </ul>
                </div>
        </div>
    )
}
export default Card