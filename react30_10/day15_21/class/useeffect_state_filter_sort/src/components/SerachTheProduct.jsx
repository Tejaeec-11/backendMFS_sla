import { useEffect, useState } from "react";

const SearchTheProduct = () => {

    const [showDatas,setShowDatas] = useState([])//Stores all products fetched from the API.
    const [search,setSearch] = useState("")//Stores the text entered in the search input,Initially empty string means no search text.
    const [category,setCategory] = useState("")//Stores the selected product category,Initially empty string means no category selected.

 const fetchTheProduct = async ()  => {//Creates an asynchronous function to fetch product data.
   try {
        const res = await fetch("https://dummyjson.com/products")//Fetches product information from the API.
        const change = await res.json()//Converts the API response into JavaScript data.
        console.log(change.products);//Displays the products in the console.
        setShowDatas(change.products)//Stores the fetched products in the showDatas state.
        
    } catch (error) {//If an error occurs,during fetch it gets printed in the console.
     console.log(error);
         }
    }

 const handleChange = (e) => {
  setSearch(e.target.value)  
 };//This function runs whenever you type something in the search box.
 let searchProduct = [...showDatas]//It copies all the elements from showDatas into a new array,why copy?Because we want to filter the products without directly modifying the original array.
  if(search){//Checks whether the search input contains a value.,If search is empty, this condition won't execute.
  searchProduct = searchProduct.filter((e,i)=>e.title.toLowerCase().includes(search.toLowerCase()))//Filters the array based on a condition.,e Represents the current product., i Represents the current product's index. Here you aren't using it.,e.title Gets the product name.Converts the text into lowercase.,includes()hecks whether one string contains another string."essence mascara".includes("phone")falsebut"essence mascara".includes("mascara") true check string,Therefore, filter() keeps only the products whose titles contain the search text.
    //console.log(searchProduct);
    
 }


 const DuplicateRemove =   [...new Set(showDatas.map((e)=>e.category))]  //Gets only the category from every product.,Second: new Set(),Removes duplicate values,Converts the Set into an array. ,Now each category appears only once.   
 //  console.log(DuplicateRemove);
  const handleCat = (e) => {//When you select a category from the dropdown, it updates the category state.
 setCategory(e.target.value)
  };
  if(category){
    searchProduct = searchProduct.filter((e)=>e.category === category)
   }


useEffect(()=>{
    fetchTheProduct()
},[])
  return (
    <>
      <div>
        <div>
            <input type="text" placeholder="Search by name..." onChange={handleChange} />
            <select onChange={handleCat}>
                <option value="">Select One..</option>
                 {DuplicateRemove.map((e)=>(
                    <option value={e}>{e}</option>
                 ))}
            </select>
        
        </div>
        {searchProduct.length === 0?(<p>No datas Found</p>):(searchProduct.map((e,i)=>(
            <div>
                <h3>{e.title}</h3>
                <p>{e.category}</p>
                <p>{e.price}</p>
            </div>
        )))}
      </div>
    </>
  );
};

export default SearchTheProduct;

// if (category)

// Checks whether a category is selected.

// filter()

// Filters products based on category.

// e.category === category

// Checks whether the product category matches the selected category.






// const arr = [{name:"React"},{name:"Node"}]

// let serach = "React"

// let copy = [...arr]


// copy = copy.filter((e)=>e.name.toLowerCase().includes(serach.toLowerCase()))


// console.log(copy);

//Main React code – Product Search + Category Filter.
//Last commented code – Small example to understand filter(), spread operator and includes().


// This is the main logic.

// Let's break it down:
// Code	Meaning
// copy.filter()	Filters array elements
// e	Current object
// e.name	Gets object name
// toLowerCase()	Converts to lowercase
// includes()	Checks whether text is present
// serach.toLowerCase()	Converts search text to lowercase

// Part 3 – Main code vs commented code
// This is the important connection between both programs.
// Small example	Main React program
// arr	showDatas
// serach	search
// copy	searchProduct
// e.name	e.title
// includes()	includes()
// filter()	filter()

// The logic is almost the same!

// The small example searches an array of two objects. The main React program searches real product data fetched from an API.