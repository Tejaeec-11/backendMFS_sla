

const Link = () => {
  return (
    <>
    
    <div className="flex gap-14 items-center">
        <a href="">Home</a>
        <a href="">Services</a>
        <a href="">About</a>
        <a href="">contact</a>
    </div>
    <div>
        <LoginButton/>
    </div>

    </>
  )
}

export default Link

const LoginButton = ()=>{
    return (
        <>
        <button className="bg-orange-600 p-1 text-white rounded w-30 font-bold">Login</button>
        </>
    )
}



//this is single component vela access panna we use export const loginbutton
//one file one export tha poda mudium