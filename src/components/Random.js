import React from 'react';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const API_KEY= "x3JS5YXiMXMKAUcGae20Ap29fdfUlNoh";
const Random = () => {

    const {gif,loading,fetchData} = useGif();
    return (
        <div className='w-1/2 bg-green-600  rounded-md border border-black flex flex-col items-center px-20 gap-y-5 mt-[10px]'>
            <h1 className='mt-[15px] text-2xl underline font-bold'>Random Gif</h1>
            {
                loading ? (<Spinner/>):(<img src={gif} width="450" height="450"/>)
            }
            <button onClick={()=>fetchData()} className=' bg-green-300 w-full my-3 py-1 rounded-md font-bold uppercase'>Generate</button>
        </div>
    )
}

export default Random
