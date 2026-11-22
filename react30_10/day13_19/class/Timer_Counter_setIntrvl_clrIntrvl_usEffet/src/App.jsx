
import { useEffect, useState } from "react";//Two hooks import pannugirom.

const App = () => {

  const [count, setCount] = useState(0);

  useEffect(() => {//Component mount aagumbodhu effect execute aagum.
   let timer = setInterval(() => {//setInterval() repeated-ah function execute pannum.
   setCount((p) => p + 1);//next vara apo prev vara number sethu varum
   }, 1000);//1sec break aprm 
   return () => {
   clearInterval(timer);//clearInterval() timer-ah stop pannum.
   };//Component unmount aagumbodhu cleanup execute aagum.
   }, []);//Empty dependency array nala component initial mount-la mattum interval create aagum.

  return (
    <>
      <h1>{count}</h1>
    </>
  );
};

export default App;

//count – current counter value.
//setCount – counter update panna.
//0 – starting value.

// - 1000 – 1000 milliseconds.
// - 1000 milliseconds = 1 second.
// - p – previous state value.
// - p + 1 – previous value-la 1 add pannum.
// Example:
// Time	Count
// Starting	0
// 1 second	1
// 2 seconds	2
// 3 seconds	3
// 4 seconds	4
// 5 seconds	5

//Final revision – All 3 programs
// No.	Program	Main concepts
// 1	useEffect Lifecycle	Mount, Update, Unmount, Render
// 2	LocalStorage CRUD	State, Object, Spread, map, filter, JSON
// 3	Counter Timer	setInterval, clearInterval, useEffect

// Important syntax revision
// Syntax	Purpose
// useState()	State create
// useEffect()	Side effects
// []	Initial mount effect
// [datas]	Dependency-based effect
// return () => {}	Cleanup
// setInterval()	Repeated execution
// clearInterval()	Stop interval
// localStorage.setItem()	Save data
// localStorage.getItem()	Retrieve data
// JSON.parse()	JSON to JS
// JSON.stringify()	JS to JSON
// map()	Transform/display array
// filter()	Filter array
// ...spread	Copy/merge values

// My suggestion: First Program 1 run panni Mount and Update understand panniko. Next Program 3 run panni timer understand panniko. Finally Program 2 CRUD practice pannu. Appo concepts easy-ah connect aagum.



import { useEffect, useState } from "react";

// const App = () => {

//   const [count, setCount] = useState(0);

//   useEffect(() => {

//     let timer = setInterval(() => {

//       setCount((p) => p >= 5 ? 0 : p + 1);

//     }, 1000);

//     return () => {
//       clearInterval(timer);
//     };

//   }, []);

//   return (
//     <>
//       <h1>{count}</h1>
//     </>
//   );
// };

// export default App;
