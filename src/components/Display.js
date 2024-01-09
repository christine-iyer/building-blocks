import { useState } from "react"

export default function Display(){
     const [x, setX] = useState(0)
     

     return(
          <>
          
          <h3>{Math.floor(Math.random() * 10) + 1 }</h3>
          </>
     )
}