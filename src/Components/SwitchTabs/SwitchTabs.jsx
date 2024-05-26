import React, { useState } from 'react'
import './Style.css'

const SwitchTabs = ({data , onChangeTab , title}) => {
    const [current , setCurrent] = useState(['Daily','Movies'])
    const onClickTab = (item)=>{
        setCurrent(item)
        onChangeTab(item)
    }
    
  return (
    <div className='CaroHeader'>
        <h4>{title}</h4>

        <div className='tabs'>
        {
            data.map((item)=>{
                return (
                    <div className={`${current.includes(item) ? 'active' : ""} tab`} onClick={()=>onClickTab(item)}>{item}</div>
                )
            })
        }

        </div>
    </div>
  )
}

export default SwitchTabs