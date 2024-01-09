// import Button from './Button'
// export default function NewBlock({ maxBid, setMaxBid }) {
//   function handleSubmit(e) {
//     e.preventDefault()
//     const form = e.target;
//     const formData = new FormData(form);
//     fetch('/some-api', { method: form.method, body: formData });
//   }
// return (
//        <div>
//          <form method='post'
           
//          >
//            <label>
//              Max Bid: $
//              <input
//                type="number"
//                // defaultValue={blahg.title}
//                value={maxBid}
//                // onChange={handleChange}
//                name="title"
//                placeholder="Bottom Line"
//                onChange={(e) => setMaxBid(e.target.value)}
//              ></input>
//            </label>
//          </form>
//          <Button onSubmit={handleSubmit}/>
//          {maxBid !== "" && <p>Your name is {maxBid.title}.</p>}
//        </div>
//      );
//    }

import Button from './Button'
import FieldOne from './FieldOne';
import FieldTwo from './FieldTwo';
import FieldThree from './FieldThree';
import FieldFour from './FieldFour';
import Display from './Display';
   
export default function MyForm() {

  function handleSubmit(e) {

    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);

    // You can pass formData as a fetch body directly:
    fetch('/some-api', { method: form.method, body: formData });

    // Or you can work with it as a plain object:
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
  }

  return (
    <div>
    <form method="post" onSubmit={handleSubmit}>
      {/* <label>
        Text <input name="myInput" defaultValue="HIHIHIHIH" />
      </label> */}
      <FieldOne />
      <FieldTwo />
      <FieldThree />
      <FieldFour />
  

      <Button type="reset">Reset form</Button>
      <Button type="submit">Submit form</Button>
    </form>
    <Display />
 
    </div>
  );
}
