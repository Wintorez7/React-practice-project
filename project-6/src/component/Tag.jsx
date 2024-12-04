import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Spinner from './Spinner';
import useGif from '../Hook/useGif';

// const API_KEY = '6jt3zV86EdSqemlhlj1bwLniycw3dU0b';
  const Tag = () => {
    
    // const [gif, setGif] = useState("");
    // const [loading, setLoading] = useState(false);
    const [tag, setTag] = useState('');
  
    const {gif,loading ,fetchData} = useGif(tag);

    function clickhandler(){
        fetchData(tag);
    }

    function changehandler(event){
        setTag(event.target.value);

    }
  return (
    <div className='w-1/2 h-[550px] mb-5 bg-blue-500 mx-auto rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px] '>
        <h1 className='text-3xl underline uppercase font-semibold'>Ramdom GIF</h1>

        {
          loading ? (<Spinner/>):
          (<div className='w-[400px] h-[320px]'>
            <img src={gif}  className="max-w-full max-h-full"/>
          </div>)
        }

        <input type="text" value={tag} className='w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center' 
        onChange={changehandler}/>

        <button onClick={clickhandler} className='w-10/12 mt-5 hover:bg-slate-200 transition-all duration-300 px-2 py-2 rounded-lg bg-white'>
           <p>Generate</p>
        </button>
    </div>
  )
}

export default Tag

