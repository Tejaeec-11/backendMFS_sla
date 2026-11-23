import { useEffect, useState } from "react";
import Timers from "./components/Timers";//This line imports that component into App

const App = () => {//Creates a functional component named App.
  const [showDatas,setShowDatas] = useState([])//Stores the product data.Updates the product data.owDatas – Updates the product data.[x] – Initially, the array is empty.empty array?Because API data hasn't arrived yet


 const fetchDatas = async() => {//asyn bcoz side effect vera onu data import pann atime agum so  async await athu use pann anwe need to use try catch //Creates an asynchronous function.Why async?Because API fetching takes time.We use async and await to handle asynchronous operations.
  try {                             //The try block contains the code that we want to execute,If an error occurs, execution goes to catch.
  const res = await fetch("https://dummyjson.com/products?limit=5")//fetch() – Sends a request to the API,await – Waits until the response arrives,res – Stores the API response,Why limit=5?It requests only five products.
  const parseData = await res.json()//The API response needs to be converted into JSON format,res.json() – Converts the response body into JavaScript data,await – Waits until conversion finishes,parseData – Stores the converted data.
  console.log(parseData.products);//Displays the products in the browser console.
  // let datas = parseData.products;
  setShowDatas(parseData.products)//*** The fetched product data is stored in showDatas.
   } 
    catch (error) {//If an error occurs during fetching or JSON conversion, this block handles it.
   console.log(error.message);//error.message displays the error message.
   }
   };
  useEffect(()=>{ //useEffect runs after the component renders.Why []?,Because the dependency array is empty.Therefore, this effect runs once after the initial render (when the component mounts).
  fetchDatas()//Calls your API function.
  },[])
  return (
    <>
      <div>
        {showDatas.map((e)=>(
          <div key={e.id}>
            <img src={e.images} alt="" style={{width:"100px"}} />
            <h2>{e.title}</h2>
            <p>{e.category}</p>
            <p>{e.price}</p>
          </div>
        ))}
      </div>
      
     <Timers/>

    </>
  );
};

export default App;
//Fetches product data from an API and displays it.

//useState – Used to store data in a component.
//useEffect – Used to perform side effects, such as API fetching.

//Flow:
// App component renders
// useEffect runs
// fetchDatas() calls API
// API response converted into JSON
// setShowDatas() updates state
// React re-renders and displays products