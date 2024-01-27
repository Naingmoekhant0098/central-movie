import React from 'react'
import { useSelector } from 'react-redux'
import Select from 'react-select'
import { useParams } from 'react-router-dom'
import { UseFetch } from '../../Hooks/UseFetch'
import { useState , useEffect} from 'react'
import 'react-circular-progressbar/dist/styles.css';
 import { CircularProgressbar , buildStyles} from 'react-circular-progressbar'
import { fetchDataFromApi } from '../../Utils/Api'
import MovieCard from '../../Components/MovieCard/MovieCard'
import './Style.css'
const filters ={};

const sortByData = [
  {label : "Popularity Descending" , value : 'popularity.desc'},
  {label : "Popularity Ascending" , value : 'popularity.asc'},
  {label : "Rating Descending" , value : 'vote_average.desc'},
  {label : "Rating Ascending" , value : 'vote_average.asc'},
  {label : "Release Date Descending" , value : 'primary_release_date.desc'},
  {label : "Release Date Ascending" , value : 'primary_release_date.asc'},
  {label : "Title (A_Z)" , value : 'original_title.asc'},
]
const Explore = () => {
  const {url} = useSelector((state)=>state.home)
  const[genre , setGenre] = useState('');
  const [sortby,setSortBy] = useState('');
  const [data,setData] = useState();
  const [pageNum , setPageNum] = useState(1);
const {mediaType} = useParams();

  const {data:genreList , loading} = UseFetch(`/genre/${mediaType}/list`)
 


  const FetchExploreData=()=>{
    fetchDataFromApi(`/discover/${mediaType}`,filters)
    .then((res)=>{
      setData(res?.results)
      setPageNum((prev)=>prev+1)
    })
  }

 

 


  const onChange=(selectedOption,action)=>{
    if(action.name === 'genre'){
      setGenre(selectedOption)

      if(action.action !=='clear'){
        let genreID = selectedOption.map((gen)=>gen.id);

        genreID =JSON.stringify(genreID).slice(1,-1)
          
        filters.with_genres= genreID;
      }else{
        delete filters.with_genre;
      }
    }

    if(action.name === 'sortby'){
      setSortBy(selectedOption)
      if(action.action !=='clear'){
        filters.sort_by = selectedOption.value;
      }
      else{
        delete filters.sort_by;
      }
    }
    setPageNum(1)
    FetchExploreData();
  }

  useEffect(()=>{
      FetchExploreData();
      setData(null);
      setSortBy(null);
      setGenre(null);
      setPageNum(1)
  },[mediaType])

  return (
    <div className='searchContainer'>
      <div className="searchResults">
        <div className="searchResulttitle">
          <h5> Explore {
          mediaType === 'movie' ? 'Movies' : 'Tv Shows'
        }</h5>
        </div>

       <div className='selectContainer'>
       <Select
       className=' sort'
        name='genre'
        value={genre}
        placeholder= 'Select Genres'
        options={genreList?.genres}
        getOptionLabel={(gen)=>gen?.name}
        getOptionValue={(gen)=>gen?.id}
        isMulti
        isClearable = {true}
        onChange={onChange}
         
        />
         <Select
        name='sortby'
        value={sortby}
        options={sortByData}
        getOptionLabel={(gen)=>gen.label}
        getOptionValue={(gen)=>gen.value}
        placeholder= 'Select SortBy'
        onChange={onChange}
        className='sort'
        />
       </div>
       
      </div>

      <div className="Results mt-5">
        {
          data && (
            data.map((item,index)=>{
              
              return(
                <MovieCard item={item} endPoint={'all'}  key={index} className='items'/>
              )
            })
          )
        }
      </div>
       
  
      
    </div>
    
  )
}

export default Explore