const About =()=>{
    return(
        <>
        <div  className="bg-red-300 p-10 items-center h-169">
           <div className="flex justify-center items-center flex-col gap-10">
            <h3 className="font-bold text-white text-4xl">Introduction to React.js</h3>
            <p className="text-center"> 
                React is a JavaScript library used to build interactive and dynamic user interfaces. It helps developers create reusable UI components.
                Components are the building blocks of a React application. They help divide the user interface into small, reusable parts.
                Hooks are special functions that allow functional components to use state and other React features. Examples include useState and useEffect.
                JSX stands for JavaScript XML. It allows developers to write HTML-like syntax inside JavaScript code.
                Props are used to pass data between components, while state is used to manage data that can change over time.
            </p>
            <button className="bg-red-400 p-2 text-white font-light rounded-1xl w-30 text-1xl text-center">know More</button>
            </div>  
        </div>
        </>
    )
}
export default About