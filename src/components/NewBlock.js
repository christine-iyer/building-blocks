export default function NewBlock({ maxBid, setMaxBid }) {
     return (
       <div>
         <form
           onSubmit={(e) => {
             e.preventDefault()
           }}
         >
           <label>
             Max Bid: $
             <input
               type="number"
               // defaultValue={blahg.title}
               value={maxBid}
               // onChange={handleChange}
               name="title"
               placeholder="Bottom Line"
               onChange={(e) => setMaxBid(e.target.value)}
             ></input>
           </label>
         </form>
         {maxBid !== "" && <p>Your name is {maxBid.title}.</p>}
       </div>
     );
   }
   