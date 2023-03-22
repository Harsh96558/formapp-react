import { useState } from 'react';
import './App.css';

function App() {

  const [formData, setFormData] = useState({
    firstName: '', lastName: '',email:"",country:'India', streetAddress:'', city:'', state:'',postalCode:'',comments:false, candidates:false, offers:false,pushNotification:""
  })


  function changeHandler(event) {
    const { name, value,type,checked } = event.target;
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type === "checkbox"? checked: value
      };
    })
   


  }

  function submitHandler(event){
    event.preventDefault();
    console.log(formData)

  }
  return (
    <div className="App flex flex-col justify-center items-center bg-slate-200 h-full w-full p-[3rem]">
      <form onSubmit={submitHandler} className='shadow-lg p-[3rem] w-[30rem]'>

        <div className="flex flex-col justify-start mb-2 ">
          <label htmlFor='firstName'> First Name</label>

          <input
            type="text"
            onChange={changeHandler}
            name="firstName"
            id="firstName"
            placeholder='Harsh'
            value={formData.firstName}
            className="border"
          />
        </div>

        <div className="flex flex-col justify-start mb-2 ">
          <label htmlFor='lastName'> Last Name</label>
          <input
            type="text"

            onChange={changeHandler}
            name="lastName"
            id="lastName"
            value={formData.lastName}
            className="border"
            placeholder='Rajput'
          
          />
        </div>


        <div className="flex flex-col justify-start mb-2 ">
          <label htmlFor='email'>Email</label>
          <input
            type="text"

            onChange={changeHandler}
            name="email"
            id="email"
            value={formData.email}
            className="border"
            placeholder="atul.rajput.96558@gmail.com"
          />
        </div>

        <div className="flex gap-2 mb-2 ">
        <label htmlFor='country'>Country</label>

        <select
        id='country'
        name='country'
        value={formData.country}
        className="border"
        onChange={changeHandler}
        >
        <option value='india'>India</option>
        <option value='us'>US</option>
        <option value='uae'>UAE</option>
        <option value='canada'>CANADA</option>



        </select>

        </div>


        <div className="flex flex-col justify-start mb-2 ">
          <label htmlFor='sstreetAddress'>Street Address</label>
          <input
            type="text"

            onChange={changeHandler}
            name="streetAddress"
            id="streetAddress"
            value={formData.streetAddress}
            className="border"
            placeholder="H.no- 26 Assdevmai Noorpur"
          />
        </div>
        <div className="flex flex-col justify-start mb-2 ">
          <label htmlFor='city'>City</label>
          <input
            type="text"

            onChange={changeHandler}
            name="city"
            id="city"
            value={formData.city}
            className="border"
            placeholder="Firozabad"
          />
        </div>

        <div className="flex flex-col justify-start mb-2 ">
          <label htmlFor='state'>State</label>
          <input
            type="text"

            onChange={changeHandler}
            name="state"
            id="state"
            value={formData.state}
            className="border"
            placeholder="Uttar Pradesh"
          />
        </div>

        <div className="flex flex-col justify-start mb-2 ">
          <label htmlFor='postalCode'>Postal Code</label>
          <input
            type="number"

            onChange={changeHandler}
            name="postalCode"
            id="postalCode"
            value={formData.postalCode}
            className="border"
            placeholder="283135"
          />
        </div>

        <fieldset className="flex flex-col justify-start mb-2 gap-2 ">
          <legend className='mb-4'>By Email</legend>

          <div>
          <input
            type="checkbox"

            onChange={changeHandler}
            name="comments"
            id="comments"
            checked={formData.comments}
            className="border"
           
          />
          <label htmlFor='comments'>Comments</label>
          <p className='ml-[.8rem] text-sm font-extralight'>Get notified when someone post a comment on a posting</p>

          </div>

          <div>
          <input
            type="checkbox"

            onChange={changeHandler}
            name="candidates"
            id="candidates"
            checked={formData.candidates}
            className="border"
           
          />
          <label htmlFor='candidates'>Candidates</label>
          <p className='ml-[.8rem] text-sm font-extralight'> Get notified when a candidate appliesfor a job.</p>

          </div>

          <div>
          <input
            type="checkbox"

            onChange={changeHandler}
            name="offers"
            id="offers"
            checked={formData.offers}
            className="border"
           
          />
          <label htmlFor='offers'> Offers</label>
          <p className='ml-[.8rem] text-sm font-extralight'> Get notified when a candidate accepts or rejects an offer.</p>

          </div>

        </fieldset>

      

        <fieldset className="flex flex-col justify-start mb-2 gap-2 ">
          <legend >Push Notification</legend>
          <p className=' text-sm font-extralight'>There are delivered via SMS to your mobile Phone</p>

          <div>
          <input
            type="radio"

            onChange={changeHandler}
            name="pushNotification"
            id="pushEverything"
            value='Everything'
            
           
           
          />
          <label htmlFor='pushEverything'>Everything</label>
          
          </div>

          <div>
          <input
            type="radio"

            onChange={changeHandler}
            name="pushNotification"
            id="pushEmail"
            value='Same as email'
           
           
           
          />
          <label htmlFor='pushEmail'>Same as Mail</label>
          
          </div>

          <div>
          <input
            type="radio"

            onChange={changeHandler}
            name="pushNotification"
            id="pushNothing"
            
            value="No Push Notification"
            
           
          />
          <label htmlFor='pushNothing'>No Push Notification </label>
         

          </div>

        </fieldset>
        <button className='py-2 px-4  bg-blue-500 rounded-md font-bold text-white' >
          Save
        </button>


        












      </form>
    </div>
  );
}

export default App;
