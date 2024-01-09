
export default function Display({fieldOne, fieldTwo, fieldThree, fieldFour}){
     const fields = [fieldOne, fieldTwo, fieldThree, fieldFour]
     console.log(fields)
     const fieldItems = fields.map(field => 
          <li key={field.uuid}>{field}</li>
          )
    
     return(
          <>
          <ul>{fieldItems}</ul>
          </>
     )
}