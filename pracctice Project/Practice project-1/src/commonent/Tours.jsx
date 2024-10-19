import React, { useState } from 'react'
import Card from './Card'

const Tours = ({tours}) => {


  return (
    <div>
        <div>
            <h1 className="text-2xl">Plan with Mohan</h1>
        </div>

        <div>
            {
                tours.map = (tour) => {
                    return <Card {...tour}/>
                }
            }
        </div>
    </div>
  )
}

export default Tours