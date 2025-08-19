import { useEffect,useState } from "react";



const ResInfo = ()=>{

    const[resData,setResdata]=useState([]);
  //const [loading , setLoading] = useState(true)
    const api_key =  import.meta.env.VITE_API_KEY;
    console.log(api_key)
   useEffect(()=>{
        fetchData();
   }, [])


   const fetchData = async ()=>{
    const data = await fetch(api_key);
    const json= await data.json();
    //console.log(json)    
    setResdata(json);
}
return 
}

export default ResInfo