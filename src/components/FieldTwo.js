import { useState } from "react"
export default function FieldTwo(){
     const [fieldTwo, setFieldTwo] = useState('true')

     return(
          <>
                <label>
        Checkboit: <input type="checkbox" value={fieldTwo}name="myCheckbox"  onChange={e=> setFieldTwo(e.target.value)}/>
      </label>
      <hr />
          </>
     )
}