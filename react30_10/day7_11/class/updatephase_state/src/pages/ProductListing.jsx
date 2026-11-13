
import { useNavigate } from "react-router-dom";

const ProductListing = () => {

  const navigate = useNavigate()  

   const datas =[{ProductName:"lipstick",Price:3205},
                 {ProductName:"eyelinear",Price:3025},
                 {ProductName:"facewash",Price:30250}, 
                 {ProductName:"kurties",Price:3250},
                {ProductName:"kurties",Price:3250} ]

                 const handleBuy = (userid)=>{
                    navigate(`/productsingle/${userid}`) //after this in approute /:id potuadd new routes
                                   }
  return (
    <div className=" p-10 flex gap-25 justify-center items-center h-100 ">
      {datas.map((e,i)=>( 
    <div key={i} className="shadow  border rounded-4xl p-2 w-50 text-center">
      <h3>{e.ProductName}</h3>
      <p>{e.Price}</p>
      <button onClick={()=>handleBuy(i)} className="bg-red-400 text-white text-center rounded border-0 p-1 w-30 my-2">Buy Now</button>
    </div>
    ))}
      </div>
  )
}

export default ProductListing
//1






//multi line different - kela declare pannanum
// . See the difference visually
// Default export
// Export
// export default Student


// Import
// import Student from "./Student"


// Named export
// Export
// export const Student


// Import
// import { Student } from "./Student"

// 1. Without {} — Default export
// Student.jsx
// const Student = () => {
//   return <h1>Student</h1>;
// };

// export default Student;


// App.jsx
// import Student from "./Student";


// Here, export default Student means this is the main component exported from that file.
// 2. With {} — Named export
// Student.jsx
// export const Student = () => {
//   return <h1>Student</h1>;
// };


// App.jsx
// import { Student } from "./Student";


// Here, export const Student means you are exporting using its name.
















//***
// >handleBuy(i)} this argu {i}
//  const handleBuy = (userid )=>{ this parameter we can add anyname in parameter ..parameter should declara 1st in expersion and down we pass argumenet  */


//**use navigate how work 
// navigate() changes the URL → Route checks the URL → element displays the component. */

//location cod just know 
// import { useNavigate } from "react-router-dom";

// const ProductListing = () => {

//   const navigate = useNavigate()  

//    const datas =[{ProductName:"lipstick",Price:3205},
//                  {ProductName:"eyelinear",Price:3025},
//                  {ProductName:"facewash",Price:30250}, 
//                  {ProductName:"kurties",Price:3250},
//                 {ProductName:"kurties",Price:3250} ]

//                  const handleBuy = (userid)=>{
//                     navigate(`/productsingle/${userid}`,{state:[1,2,34,4,4,5,6]}) //after this in approute /:id potuadd new routes
//                                    }
//   return (
//     <div className=" p-10 flex gap-25 justify-center items-center h-100 ">
//       {datas.map((e,i)=>( 
//     <div key={i} className="shadow  border rounded-4xl p-2 w-50 text-center">
//       <h3>{e.ProductName}</h3>
//       <p>{e.Price}</p>
//       <button onClick={()=>handleBuy(i)} className="bg-red-400 text-white text-center rounded border-0 p-1 w-30 my-2">Buy Now</button>
//     </div>
//     ))}
//       </div>
//   )
// }

// export default ProductListing














