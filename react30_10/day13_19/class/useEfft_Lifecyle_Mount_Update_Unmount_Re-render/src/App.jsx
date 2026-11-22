
import { useEffect, useState } from "react";//useState – data store panna,useEffect – side effects handle panna.
const App = () => {

  const [datas, setDatas] = useState(0);

  console.log("Running component");//default already one render agi irukum in consloe so inti 0 but c.l 1time default render output iurkum and when button click 1 again ella show agum athu  button click again
  const handleClick = () => {
    console.log("Running handleClick"); //Function call pannumbodhu console message print aagum.
  };
  handleClick();//Component render aagumbodhu function execute aagum.

  // Mount-Type 1 – Empty dependency array []
  useEffect(() => {
    console.log("Mounting");//Empty dependency array [] irukkuradhu nala initial mount-la effect run aagum.
  }, []);

  // UpdateType 2 – Dependency [datas]
  useEffect(() => {//datas value change aagumbodhu effect run aagum. Initial mount-layum run aagum.
    console.log("Updating");
  }, [datas]);

  // Unmount
  useEffect(() => {//Cleanup function. Component remove aagumbodhu execute aagum.
    return () => {
      console.log("Unmounting");
    };
  }, []);

  // Without dependency arrayType 3 – No dependency array
  useEffect(() => {
    console.log("Every render");//Dependency array illa. Every completed render-kum effect execute aagum.
  });

  return (
    <>
      <h1>App</h1>
      <h1>{datas}</h1>
      <button onClick={() => setDatas(datas + 1)}>
        Increase
      </button>
    </>
  );
};

export default App;

//Purpose: React component render aagumbodhu useEffect eppadi work aagudhu-nu understand pannuradhu.
// Indha program-la 4 different useEffect behaviours irukku. Adha separate-ah understand pannuvom.
// 1. First, understand this small difference
// useEffect-la mainly 3 types irukku:

// Type 1 – Empty dependency array []
// useEffect(() => {
//   console.log("A");
// }, []);


// Once
// Component first time display aagumbodhu run aagum.

// Type 2 – Dependency [datas]
// useEffect(() => {
//   console.log("B");
// }, [datas]);


// When datas changes
// First render-layum run aagum. datas change aagumbodhum run aagum.

// Type 3 – No dependency array
// useEffect(() => {
//   console.log("C");
// });


// Every render
//Every completed render-kum run aagum.



//*****
// 5. Remember this one small table
// Code	Eppo execute aagum?
// Normal console.log	Every render
// handleClick()	Every render
// useEffect(..., [])	Initial mount
// useEffect(..., [datas])	Initial mount + datas change
// useEffect(...)	Every completed render
// Cleanup return () => {}	Unmount 


// React Component Lifecycle
// 1. Mounting
// Component first time screen-la appear aaguradhu.

// 2. Updating
// Component data change aagi again render aaguradhu.

// 3. Unmounting
// Component screen-la irundhu remove aaguradhu.

//Lifecycle	Your code
// Mounting	useEffect(..., [])
// Updating	useEffect(..., [datas])
// Unmounting	return () => {}

// - Mount = First time varudhu.
// - Update = Change aagudhu.
// - Unmount = Remove aagudhu.
// Idhudhaan React Lifecycle. useEffect use panni indha stages-la nadakkura activities-ah handle pannalaam.