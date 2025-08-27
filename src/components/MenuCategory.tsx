const MenuCategory  = ({data})=>{
    console.log(data);
        
    return (
        
      <div>
             <div className="flex justify-between mb-4 shadow-md p-2">
             <h4 className="text-2xl ">{data?.title}({data?.itemCards?.length || 0}) </h4>
                <span>^</span>
  </div>
      </div>
      
    )
}

export default MenuCategory;