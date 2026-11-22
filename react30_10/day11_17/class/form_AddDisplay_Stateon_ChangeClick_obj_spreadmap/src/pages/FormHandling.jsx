import React, { useState } from 'react'

const FormHandling = () => {
  const [inputdata, setInputData] = useState("")
  const [savedata, setSaveData] = useState([])

  const handleChange = (e) => {
    setInputData(e.target.value)//bcoz user type value target pannu e tharum it user type nalla e.target.value
      }

  const handleClick = () => {
   const obj = { id: Date.now(), inputdata }
   setSaveData((p) => [...p, obj])
   }
  return (
    <>
    <div><h1 className='text-center p-2 bg-pink-800 rounded-b-4xl text-white'>REGISTER FORM</h1></div><br />
    <input onChange={handleChange} type="text"value={inputdata} className='border mx-10'/>
     <button onClick={handleClick}>Click</button>
     <div>
        {savedata.map((e, i) => (
          <div key={e.id} className='mx-10'>
            <p>id: {e.id}</p>
            <p>useri/p :{e.inputdata}</p>
          </div>
        ))}
      </div>
  
    </>
  )
}

export default FormHandling
//for handle change
// - e.target.value → Gets the latest input value.
// - inputData → Gets the current state value.
// - setInputData() → Updates the state.
// Interview point: Why do we use e.target.value inside an input's onChange event?
// Because it retrieves the latest value entered by the user.



// p – previous saved array.
// ...p – existing elements copy pannum.
// obj – new object add pannum.
// setSaveData – updated array state-la store pannum.
// - id – unique timestamp value.
// - inputdata – user type panna text.