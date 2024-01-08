export default function FieldThree(){
     return(
          <>

      <p>
        Radio buttons:
        <label><input type="radio" name="myRadio" value="option1" defaultChecked={true} /> Option 1</label>
        <label><input type="radio" name="myRadio" value="option2"  /> Option 2</label>
        <label><input type="radio" name="myRadio" value="option3" /> Option 3</label>
      </p>
      <hr />

          </>
     )
}