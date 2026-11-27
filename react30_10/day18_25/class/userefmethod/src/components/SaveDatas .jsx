import React, { useRef } from 'react' //Imports React and useRef hook.useRef helps access an HTML element directly.
const SaveDatas = () => {
  
  const formRef = useRef("")//Creates a reference for the input,formRef.current gives access to the input element.this like state mari 
  
  //saves input data in localStorage and displays it.
  let datas = JSON.parse(localStorage.getItem("mysheet")) || [] //**localStorage.getItem("mysheet") –mysheet localstorage fileinput data gets saved in local storage.JSON.parse() – converts JSON string into JavaScript data.|| [] – if there is no saved data, creates an empty array.["React", "JavaScript", "HTML"]
  
   const handleClick = ()=>{
   let save = formRef.current.value //Gets input value type panna aga poe store in console ex e.target.value like this 
   datas.push(save)//Adds value to array ida line datas kula push save type panra value pusihing
   localStorage.setItem("mysheet",JSON.stringify(datas))//JSON.stringify(datas ) Converts array into JSON string,localStorage.setItem()	Saves data in browser and myshoet push type curent value string 
   alert("Successfully done")//		Displays success message
   formRef.current.value = ""//	Clears input
}

return (
    <>
     <input type="text" ref={formRef} className='border' /> <span></span>
     <button  onClick={handleClick} className='border'>Save Datas</button>
     <div>{/*mysheet local storage store panna ceate panna ans daiatas.map ui show pann acreate panna  */}
       {datas.map((e,i)=>(
        <p key={i}>{e}</p>
       ))}
     </div>
    </>
  )
}

export default SaveDatas

//How it works line 6,10,11 ,12 tha *****
// Enter input
// Example: React
// Click Save Datas
// useRef gets input value
// Array.push()
// localStorage saves data
// map() displays saved data