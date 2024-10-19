import React from 'react'
import Card from './Card'

const Tours = ({tours,removeTour}) => {


  return (
    <div>
        <div className='w-full h-[100px] flex justify-center  bg-green-400'>
            <h1 className="text-4xl mt-5 font-semibold">Plan with Mohan</h1>
        </div>

        <div className='w-full grid grid-cols-3 space-y-4 h-screen mt-5 '>
            {
                tours.map ((tour) => {
                    return <Card key={tour.id} {...tour} removeTour={removeTour}/>
                })
            }
        </div>
    </div>
  )
}

export default Tours