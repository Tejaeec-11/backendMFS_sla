import cardsone from '../assets/cards/p1.avif'
import cardstwo from '../assets/cards/p2.avif'
import cardsthree from '../assets/cards/p3.avif'
import cardsfour from '../assets/cards/p4.avif'

const Cards = () =>{
    return (
        <>
        <div 
        className='p-13 flex gap-4 ' >
             <div> <img src={cardsone} alt="dress" /> </div>
             <div> <img src={cardstwo} alt="dress" /> </div>
             <div> <img src={cardsthree} alt="dress" /> </div>  
             <div> <img src={cardsfour} alt="dress" /> </div>

        </div>



          <div 
        className='p-13 flex gap-8'>
             <div> <img src={cardsone} alt="dress" /> </div>
             <div> <img src={cardstwo} alt="dress" /> </div>
             <div> <img src={cardsthree} alt="dress" /> </div>  
             <div> <img src={cardsfour} alt="dress" /> </div>

        </div>
        </>
    )
}
export default Cards


// if need   <  className='p-13 flex gap-4 justfiy-center items-center ' >