import { useState , useEffect } from "react";
import { fetchDataFromApi } from "../Utils/Api";

export const UseFetch=(url)=>{
  const [data,setData] = useState([]);
  const [loading , setLoading] = useState(true);
  const [error , setError] = useState()
useEffect(()=>{
  
  fetchDataFromApi(url).then((res)=>{
    setData(res);
    setLoading(false);
  })
  .catch((err)=>{
    setError('Someting wrong when fetching data')
    setLoading(true)
  })
},[url])

  return {data,loading,error}
}