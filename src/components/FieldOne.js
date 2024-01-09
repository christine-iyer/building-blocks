import { useState } from "react"
export default function FieldOne(){
     const [fieldOne, setFieldOne] = useState('Hi')
     return(
          <>
          <label>
        Text <input name="myInput" type='text'value={fieldOne} onChange={e=> setFieldOne(e.target.value)} />
      </label>
      <div>
          <h1>{fieldOne}</h1>
      </div>
          </>
     )
}