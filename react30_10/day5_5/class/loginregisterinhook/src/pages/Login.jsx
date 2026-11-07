const Login = ()=>{
    return(
<>
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
     <div className="w-full max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
       <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form className="flex flex-col gap-4">
           <input type="email" placeholder="Enter the Email" className="border border-gray-300 p-3 rounded-md outline-none focus:border-blue-500" />
           <input type="password" placeholder="Enter the Password" className="border border-gray-300 p-3 rounded-md outline-none focus:border-blue-500" />
           <button className="bg-green-500 text-white p-3 rounded-md hover:bg-green-600">Login</button>
        </form>
     </div>
    </div>
        
</>
    )
}
export default Login