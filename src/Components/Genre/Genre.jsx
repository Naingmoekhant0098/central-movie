import React from 'react'
import './Style.css'
import { useSelector } from 'react-redux'
const Genre = ({ids}) => {
    const {genres} = useSelector((state)=>state.home)
   
  return (
    <div className='genres'>
        {
            ids?.map((id,i)=>{
                if(!genres[id]?.name) return;
             return(
                <div className='genre' key={i}>
                    {
                        genres[id].name
                    }
                    </div>
             )
            })
        }
    </div>
  )
}

export default Genre