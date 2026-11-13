import { useNavigate } from "react-router-dom";

const Products = () => {

const navigate = useNavigate()
  
 const back =()=>{

  navigate(-1)  //this is previes page-1 and forward +1 for home"/" or else ("/Rendering") 
  
  }
  return (
    <>
    <div>
    <div onClick={back} className="bg-red-400 text-white text-center 
    mx-3 my-3 w-40 p-1 rounded-2xl">Back ProductList</div>
    </div>
    </>
  )
}

export default Products

//1


















//rule
// useNavigate() → Changes the URL.



// :id → Receives a dynamic value in the route.



// useParams() → Gets that value from the URL.

//--------------------------------------------------------------------------


















//1 just know avolo no need to study 
// import { useNavigate, useParams } from "react-router-dom";

// const Products = () => {

//   const navigate = useNavigate()
  
//   const {id} =  useParams() //useNavigate sends you to the URL; useParams reads the URL value.

//   const back =()=>{

//       navigate(-1)  //this is previes page-1 and forward +1 for home"/" or else ("/Rendering") 
  
//     }

//   return (
//     <>
//     <div>
//     click Product ppage this is when we click navgate button then url then approutes then elememt path irua product page then back page we again put button
//     back page after all then go to back page we put -1 button so navigate and usenavigate is ho() so in expression
//     <div onClick={back} className="bg-red-400 text-white text-center mx-3 my-3 w-40 p-1 rounded-2xl">Back ProductList</div>
//     <div className="mx-15">selected product{id}</div>
//     </div>
//     </>
//   )
// }

// export default Products



//2 is array of object find vechi product list prodcut equal to proudt index same check


// <h2>{datas.ProductName}</h2>
//    <p>{datas.Price}</p>  this is call rendering ..for we use map but we used copy

//2 just know avolo no need to study
// import { useNavigate, useParams } from "react-router-dom";

// const Products = () => {

//      const datas =[{ProductName:"lipstick",Price:3205},
//                  {ProductName:"eyelinear",Price:3025},
//                  {ProductName:"facewash",Price:30250}, 
//                  {ProductName:"kurties",Price:3250},
//                 {ProductName:"kurties",Price:3250} ]

//   //-------------------------------------------------------------------
  
//   const navigate = useNavigate()
  
//   const {id} =  useParams() //useNavigate sends you to the URL; useParams reads the URL value.

//   const back =()=>{

//       navigate(-1)  //this is previes page-1 and forward +1 for home"/" or else ("/Rendering") 
  
//     }
//   //-----------------------------------------------------------------------------------------

//    let copy = [...datas]

//    copy = copy.find((e,i)=>i==id) //id is idex unquie elemet is different
    
//   console.log(copy);
  

//   return (
//     <>
//     <div>
//     click Product ppage this is when we click navgate button then url then approutes then elememt path irua product page then back page we again put button
//     back page after all then go to back page we put -1 button so navigate and usenavigate is ho() so in expression
//     <div onClick={back} className="bg-red-400 text-white text-center mx-3 my-3 w-40 p-1 rounded-2xl">Back ProductList</div>
//     <div className="mx-15"> there id == product name  selected product index and name of product   {id}</div>
//     {/* -------------------------------------------------------------------------- */}
//     <h2>{copy.ProductName} </h2>
//     <p>{copy.Price}</p>
//     </div>
//     </>
//   )
// }

// export default Products


//3 location
// import { useNavigate, useParams, uselocation } from "react-router-dom";

// const Products = () => {

//      const datas =[{ProductName:"lipstick",Price:3205},
//                  {ProductName:"eyelinear",Price:3025},
//                  {ProductName:"facewash",Price:30250}, 
//                  {ProductName:"kurties",Price:3250},
//                 {ProductName:"kurties",Price:3250} ]
//-----------------------------------------------------------------
//const location = uselocation()
//console.log(location);

//   //-------------------------------------------------------------------
  
//   const navigate = useNavigate()
  
//   const {id} =  useParams() //useNavigate sends you to the URL; useParams reads the URL value.

//   const back =()=>{

//       navigate(-1)  //this is previes page-1 and forward +1 for home"/" or else ("/Rendering") 
  
//     }
//   //-----------------------------------------------------------------------------------------

//    let copy = [...datas]

//    copy = copy.find((e,i)=>i==id) //id is idex unquie elemet is different
    
//   console.log(copy);
  

//   return (
//     <>
//     <div>
//     click Product ppage this is when we click navgate button then url then approutes then elememt path irua product page then back page we again put button
//     back page after all then go to back page we put -1 button so navigate and usenavigate is ho() so in expression
//     <div onClick={back} className="bg-red-400 text-white text-center mx-3 my-3 w-40 p-1 rounded-2xl">Back ProductList</div>
//     <div className="mx-15"> there id == product name  selected product index and name of product   {id}</div>
//     {/* -------------------------------------------------------------------------- */}
//     <h2>{copy.ProductName} </h2>
//     <p>{copy.Price}</p>
//      {/* -------------------------------------------------------------------------- */}
//    <div>{location.state.map((e,i)=>(<pkey={i}>{e}</p>))}</div>
//     </div>
//     </>
//   )
// }

// export default Products
//navigate , state send panni kela map show in screen and navgiate inruthu console show
//use locationstate  http://localhost:5173/productsingle/2 buy click panna process agum ida copy panni googole pota athu only http://localhost:5173 only go idahttp://localhost:5173/productsingle/2 pogdhu bcoz location only for chrome not copy in google but if we talk location from code then google http://localhost:5173/productsingle/2 ida without button click it go this slected product page this is use locationtt5
//try with location put this in google http://localhost:5173/id/2 and try without location put this in google http://localhost:5173/productsingle/2




