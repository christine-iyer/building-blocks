import React, {useState} from 'react'
import FieldThree from './FieldThree'

const ReadMore = ({fieldThree}) => {
     const text = FieldThree
     const [readMore, setReadMore]= useState(true)
     const toggleReadMore =()=>{
          setReadMore(!ReadMore)

     }
  
     return (
    <p className='text'>
     {readMore ? text.slice(0,10) : text}
     <span onClick={toggleReadMore}
     className='readOrHide'
     style={{color:"green"}}>
          {readMore ? "...read more": "show less"}
     </span>
    </p>
  )
}

export default ReadMore
