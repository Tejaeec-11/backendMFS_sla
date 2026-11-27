// //code 1 savedatasave data in local storga euse useref 
// import { useRef } from "react"
// import SaveDatas from "./components/SaveDatas "

// const App = () => {
//   //console.log('Running');
//   const myRef = useRef("")//input

//   let datas = JSON.parse(localStorage.getItem("myrefdatas")) || []//local crete fil name myref datad aga stotre n number of data

//   const displayRef = useRef(null)//show display box p tagg
//   const dispalyrefnew = useRef(null)//box
//   const buttontext = useRef('Hide')

//   const handleRef = ()=>{//iinput
//    //console.log(myRef.current.value);//ida line console path current ula value
  
//    const myinput = myRef.current.value//type e.target.value mari aga irukum
//   datas.push(myinput)//myasheet kula push my current type input
//   localStorage.setItem("myrefdatas",JSON.stringify(datas))//myref string data change saved
//   }

//   const hanldeClick = ()=>{//box
//    // dispalyrefnew.current.style.display = "none"
//     if(dispalyrefnew.current.style.display === "block"){
//       dispalyrefnew.current.style.display = "none"
//       buttontext.current.innerText = "Show"
//     }else{
//       dispalyrefnew.current.style.display = "block"
//       buttontext.current.innerText = "Hide"
//     }
//   }

//   return (
//     <>
//     <input type="text" onBlur={handleRef} ref={myRef} className="border" />
//     <p ref={displayRef}></p>
//     <div ref={dispalyrefnew} style={{backgroundColor:"black",display:"block",color:"white",padding:"10px",width:"100px",height:"200px"}}>This is Box</div>
//     <button ref={buttontext} onClick={hanldeClick} className="border">Hide</button>
//    <div style={{marginTop:"10px"}}>
//       <SaveDatas/>{/*saveData showing  */} 
//   </div>
//     </>
//   )
// }

// export default App
//--------------------------------------------------------------------------------------------
//for code 2 scroloig to the context

import SrollingToTheContent from './components/SrollingToTheContent '


const App = () => {
  return (
    <div><SrollingToTheContent/></div>
  )
}

export default App