import { useState } from "react"
export default function FieldFour(){
     const [fieldFour, setFieldFour] = useState('Typically, you will place every textarea inside a label tag. This tells the browser that this label is associated with that text area. When the user clicks the label, the browser will focus the text area. It’s also essential for accessibility: a screen reader will announce the label caption when the user focuses the text area. If you cant nest textarea into a label associate them by passing the same ID to textarea id and label htmlFor. To avoid conflicts between instances of one component, generate such an ID with useId.')
     return(
          <>
          <label>
        Text <textarea name="myInput" value={fieldFour} rows={4} cols={40} onChange={e=> setFieldFour(e.target.value)} />
      </label>
          </>
     )
}