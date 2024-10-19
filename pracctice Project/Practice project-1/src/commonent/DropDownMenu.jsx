import React from 'react'

const DropDownMenu = (props) => {
    const data = props.Menu;
  return (
    <div className='w-full h-screen bg-gray-400'>
        <div>
        <select name="cars" id="cars">
            <option value="volvo">{Menu}</option>
            <option value="saab"></option>
            <option value="mercedes"></option>
            <option value="audi"></option>
        </select>
        </div>
    </div>
  )
}

export default DropDownMenu