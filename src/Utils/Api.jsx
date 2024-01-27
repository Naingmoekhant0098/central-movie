 import axios from 'axios';

 const base_url =  'https://api.themoviedb.org/3';

 const headers = {
  Authorization : 'bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNDdiZDAyZDlmNzYxZmExODBjYWMxNjEyMTk5ZDFmNiIsInN1YiI6IjY1NTc2NDdkNTM4NjZlMDExYzA4NzQ4MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.V0E2Ha1oke7EZlYI2ZbCnXeTuUSGJBPkZoBceQZRHlo',

 }

 export const fetchDataFromApi=async(url,params)=>{

  const {data} = await axios.get(base_url + url ,{
    headers,
    params
  })

   return data;
 }