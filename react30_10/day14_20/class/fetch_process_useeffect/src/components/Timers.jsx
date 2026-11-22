import { useState } from "react";

const Timers = () => {
  const [count,setCount] = useState(0)
  const [timer,setTimer] = useState(null)

  const handleClcik = () => {

    if(timer){//Checks whether a timer is already running,If timer contains an interval ID, the condition is true.
        clearInterval(timer)//Stops the currently running interval,If the timer runs every second, clearInterval() stops those repeated executions.
        setTimer(null)//After stopping the timer, we set its state to null,Now React knows that the timer is stopped.
        return//Stops the execution of the current function.
    }//Because we don't want to create another interval after stopping the existing one.


    const timers = setInterval(()=>{//***setInterval() executes a function repeatedly after a specified time interval. */
    setCount((p)=>p+1)//Increments the count by one every second,p represents the previous state value.
    },1000)//1sec
    setTimer(timers)//setInterval() returns an interval ID,We store that ID inside the timer state,Later, we use that ID to stop the timer.
    };
  
    return (
    <>
      <h2>count:{count}</h2>
      <button onClick={handleClcik}>
        {timer?"Stop":"Start"}
      </button>
    </>
  );
};

export default Timers;
//Timers.jsx – Creates a Start/Stop timer using setInterval().
//They work independently, but Timers is displayed inside App.

// how Worker
//1
// 0
// null
// Start

// Initial state
// No interval is running.
//2
// Timer execution
// Step 2 of 5

// 0
// Interval ID stored
// Stop

// Click Start
// setInterval starts executing every second.
// Previous
//3
// timer execution


// 1
// Interval ID stored
// Stop

// After 1 second
// Count increases by one.
// Previous
// Next
//4
// 2
// Interval ID stored
// Stop

// After 2 seconds
// Count increases again.
// Timer execution
// Step 5 of 5

// 2
// null
// Start

// Click Stop
// clearInterval stops the repeated execution.
// Previous
// Next


// Important concepts for interviews
// Concept	Purpose
// useState	Stores component data
// useEffect	Handles side effects
// async/await	Handles asynchronous operations
// fetch()	Gets API data
// res.json()	Converts response into JSON
// map()	Iterates through an array
// setInterval()	Executes repeatedly after a time interval
// clearInterval()	Stops an interval
// null	Represents no active timer here
// Ternary operator	Displays Start or Stop dynamically

// 5. One important improvement
// Your Timers component should also clear its interval when the component is removed from the screen.

// You can use useEffect cleanup for that. Otherwise, an interval might continue running after unmounting.

// Also, the timer currently stops but does not reset the count. That's correct for a pause/resume timer.

// Remember the difference:
// - clearInterval() → Stops the timer.
// - setCount(0) → Resets the count.
// - setInterval() → Starts repeated execution.
// Overall, your code combines two important React concepts: API data fetching in App and timer state management in Timers.