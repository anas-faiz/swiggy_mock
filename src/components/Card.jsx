const Card = ({name,description,price,rating,image})=>{
//console.log(resData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

//const path = resData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.name
  //  console.log(path)
  const imageapi = import.meta.env.VITE_IMAGE_KEY
    return(
        <div className="card">
                <img src={imageapi+image}/>
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