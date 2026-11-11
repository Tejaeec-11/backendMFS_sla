
const ArrayOfObjectRendering = () => {
   const afoProduct = [
    { ProductName: "lipstick", price: 200 },
    { ProductName: "eyelinear", price: 100 },
    { ProductName: "eyeshadow", price: 300 },
    { ProductName: "nailpolish", price: 800 },
    { ProductName: "powder", price: 800 }
  ]
  //1- show add iteam see in console use index
  let copy = [...afoProduct]
  const handleClick = (id)=>{
     console.log(id);
     
  }
  // //2- 800 kela iruka
  // copy =  copy.filter((e,i)=>e.price<800)

  // //3 - if they ask 800 equal product just change this 
  //   copy =  copy.filter((e,i)=>e.price==100)

//4 - total find 
 copy =  copy.reduce((acc,curr)=>acc+curr.price,0)
  return (
    <>
    {/* <h1>this for 1,2,3=1,2 hide 1 see out put for 2 and hide 2 see output for 1 when hide 1 , 2 see output for 3 when click buy now in console it add iteams o,1,2, with index</h1>
    <div className="p-15 flex gap-10">{copy.map((e,i)=>(
      <div key={i} className="border rounded p-2 w-100 ">
        <h3>{e.ProductName}</h3>
        <p>{e.price}</p>
        <button onClick={()=>handleClick(i)} className="border rounded bg-red-400 text-white w-20">Buy Now</button>
      </div>
    ))}</div> */}
    <h1>this for 4 total==={copy}</h1>
    </>
  )
}

export default ArrayOfObjectRendering

//5  last
