import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Spinner from './Spinner';
import useGif from '../Hook/useGif';

  // const API_KEY = process.env.REACT_APP_GIPHY_API_KEY
    const Random = () => {
   
    const {gif,loading,fetchData} = useGif();

    function clickhandler(){
        fetchData();
    }
  return (
    <div className='w-1/2 h-[480px] bg-green-500 mx-auto rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
        <h1 className='text-3xl underline uppercase font-semibold'>Ramdom GIF</h1>

        {
          loading ? (<Spinner/>):
          (<div className='w-[400px] h-[320px]'>
            <img src={gif}  className="max-w-full max-h-full"/>
          </div>)
        }

        

        <button onClick={clickhandler} className='w-10/12 mt-5 hover:bg-slate-200 transition-all duration-300 px-2 py-2 rounded-lg bg-white'>
           <p>Generate</p>
        </button>
    </div>
  )
}

export default Random

