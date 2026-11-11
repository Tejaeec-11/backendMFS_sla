
const BooleanRendering = () => {

  let boolean = 10000
  return (
    <>
    <div className='bg-black p-10 h-100'>
     {boolean? <div className='p-4 h-50 w-50 rounded bg-white text-black'>Box </div>
     : 
     <div className='p-4 h-50 w-50 rounded bg-red-300 text-white'>  Box</div>
     }
    </div>
    </>
  )
}

export default BooleanRendering
//2 boolean true or false
//false-undefined,null,0,false
//true-0001,12345567780,true,[],{}

//try this
// | Operator | Name               |
// ---------------------------------
// |  !       | logical not (just know) |
// | &&       | Logical AND        |
// | ||       | Logical OR         |
// | ??       | Nullish Coalescing |
// | ? :      | Ternary Operator   | used
