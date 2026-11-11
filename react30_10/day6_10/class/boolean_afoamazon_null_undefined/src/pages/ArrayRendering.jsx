
const ArrayRendering = () => {
  const arr =[1,2,3,4,5,6]
//one change or update no use index
  arr[0] = 0
  arr[1] = 1
//two add last
arr.push(300000)
arr.push(23874)
//three delete last
  arr.pop()
//four even no 
const even = arr.filter((e)=>e%2===0)
//five rest ... copy+filter
let  copy = [...arr]
copy = copy.filter((e)=>e%2===0)
 //six find - purila
// copy = copy.find((e)=>e%2===0)
// console.log(copy);

  return (
    <>
    <h3>one ,two,three push,pop,update</h3>
     <div className="p-15">{arr.map((e,i)=>(
      <p key={i}>{e}</p>
        ))}</div> 

      <h3>four,even in filter pannu</h3>
       <div className="p-15">{even.map((e,i)=>(
      <p key={i}>{e}</p>
        ))}</div> 


        <h3>five,... advance</h3>
       <div className="p-15">{copy.map((e,i)=>(
      <p key={i}>{e}</p>
        ))}</div> 

      {/* <h3>Six,... find</h3>
      <div className="p-15">
      {copy ?copy: copy.map((e, i) => (
      <p key={i}>{e}</p>
     ))}
     </div>  */}

        
    </>
  )
}

export default ArrayRendering

//3 =array   2
//  <p>{e}</p>   0
//  <p>{e}</p>   1
//  <p>{e}</p>   2  for unquie add key