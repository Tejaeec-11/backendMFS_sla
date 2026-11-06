import foder from '../assets/banner/1600w--U8HqZtV1w8.webp'
import Button from '../Utils/Button'
const AboutSection =()=>{
    return (
        <>
        <div className='flex justify-between items-center p-10'>
              <div className='flex flex-col p-1 gap-5'> 
                <h3 className='font-bold text-wrap'> sit amet consectetur adipisicing elit.</h3>
                <p className='text-wrap w-200' >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias culpa, officia vero, sed voluptate ab nihil maiores obcaecati quas debitis consequuntur corrupti distinctio dolor eos, odit voluptatum. Qui, atque quia! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, numquam repudiandae. Provident sunt deserunt fugit placeat delectus! Assumenda labore eligendi, porro laudantium cum tempore incidunt minima recusandae ea odit laborum commodi asperiores accusantium praesentium fuga nesciunt doloremque natus mollitia eius possimus! Porro nobis optio assumenda quisquam facere. Maxime, sunt accusantium.</p>
                <Button/>
              </div>
              <div><img src={foder}  alt="foder" /></div>
        </div>
        </>
    )
}
export default AboutSection

//<div className='p-13 flex justify-center items-center'> line 6
// or  <h3 className='font-bold text-wrap text-4xl'>

//then  <div><img src={foder} className='w-200 h-200 '

// <p className='text-wrap w-200' >

