import { useState } from "react"
export default function FieldThree(){
     const [fieldThree, setFieldThree] = useState('Misc')
     return(
          <>
          <select
            value={fieldThree}
            onChange={e=> setFieldThree(e.target.value)}
            name="category">
            <option value="Misc">Select a 🤍</option>
            <option value="#Beer">#Beer</option>
            <option value="#Weed">#Weed</option>
            <option value="#Bars">#Bars</option>
            <option value="#Outdoors">#Outdoors</option>
            <option value="#Kids">#Kids</option>
            <option value="#Indoors">#Indoors</option>
          </select>

      <hr />

          </>
     )
}