import React, { useState } from 'react'


const Card = ({id,image,info,price,name,removeTour}) => {
    const [readmore,setReadmore] = useState(false)
    const description = `${info.substring(0,200)}....`

    function readmoreHandler(){
        setReadmore(!readmore)
    }

   

  return (
    <div className='w-[80%] justify-center mx-auto'>
        <div className='w-[90%] mx-auto py-4 px-2 rounded-xl shadow-2xl'>
            <img className='w-[90%]  rounded-lg mx-auto' src={image}/>
            <div className='w-[90%] mx-auto'>
                    <div>
                        <h4 className='mt-2 text-green-500 font-semibold'>{price}</h4>
                        <h4 className='text-red-500 font-semibold'>{name}</h4>
                    </div>
                    <div>
                        {readmore ? info: description}
                        <span className='text-blue-600 cursor-pointer' onClick={readmoreHandler}>
                            {readmore ? `showless`:`readmore`}
                        </span>
                    </div>
            </div>
            
           <div className='w-full flex justify-center'>
            <button className=' mx-auto px-3 mt-3 py-1 text-white rounded-lg hover:bg-red-600 transition-all duration-300 bg-red-500 mx' onClick={() => removeTour(id)}>Not Intersted</button>
           </div>
        </div>       
        
    </div>
  )
}

export default Card