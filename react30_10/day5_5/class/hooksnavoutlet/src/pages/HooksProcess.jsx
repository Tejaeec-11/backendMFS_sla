import { useNavigate } from "react-router-dom"

const HooksProcess =()=>{
    //js code
    const navigate = useNavigate()
    
    const handleBack =()=>{
        navigate(-1) //backpage
    }
    const handleForward =()=>{
        navigate(1) //frontpage
    }
    const handleLogin =()=>{
        navigate("/login")
    }


    return(
        <>
       <div className="m-10 flex gap-15">
         <button onClick={handleBack}>Back</button>
        <button onClick={handleForward}>Forward</button>
        <button onClick={handleLogin}>Login</button>
       </div>
        </>
    )
}
export default HooksProcess

// hooks 3 type 
// 1.use nav ***
//2.use param -venam
//3.use location -venam