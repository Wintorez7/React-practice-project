import React, { useState } from 'react'


const Card = (id,image,info,price,name) => {
    const [readmore,setReadmore] = useState(false)
    const description = `${info.substring(0,200)}....`

    function readmoreHandler(){
        setReadmore(!readmore)
    }

  return (
    <div className=''>
        <img src={image}/>
           <div className=''>
            <div>
                    <h4>{price}</h4>
                    <h4>{name}</h4>
                </div>
                <div>
                    <p>{description}</p>
                    <span onClick={readmoreHandler}>
                        {readmore ? `showless`:`readmore`}
                    </span>
                </div>
           </div>
        
        <button>Not Intersted</button>
        
    </div>
  )
}

export default Card