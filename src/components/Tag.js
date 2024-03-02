import React from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';
import { useState } from 'react';

const API_KEY= "x3JS5YXiMXMKAUcGae20Ap29fdfUlNoh";
const Tag = () => {
      const [search,setSearch] = useState("");
      const {gif,loading,fetchData} = useGif(search);

    return (
        <div className='w-1/2 bg-blue-300  rounded-md border border-black flex flex-col items-center px-20 gap-y-5 mt-[10px]'>
            <h1 className='mt-[15px] text-2xl underline font-bold'>Random {search} Gif</h1>
            {
                loading ? (<Spinner/>):(<img src={gif} width="450" height="450"/>)
            }
            <input onChange={(event)=>setSearch(event.target.value)} className='w-full text-lg text-center rounded-sm font-bold' value={search}
            />
            <button onClick={()=>fetchData()} className=' bg-blue-100 w-full my-3 py-1 rounded-md font-bold uppercase'>Generate</button>
        </div>
    )
}

export default Tag

