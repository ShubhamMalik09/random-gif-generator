import axios from 'axios';
import { useEffect, useState } from 'react'
const API_KEY= "x3JS5YXiMXMKAUcGae20Ap29fdfUlNoh";
const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = (search) => {
    const [loading,setLoading]= useState(false);
    const [gif,setGif] = useState("");

    async function fetchData(){
        setLoading(true);
        const {data} = await axios.get(search? (`${url}&tag=${search}`):(url));
        const imageSource= data.data.images.downsized_large.url;
        setGif(imageSource);
        setLoading(false);
    }
    
    useEffect(()=>{
        fetchData(""); 
    },[]);    

    return {gif,loading,fetchData};
}

export default useGif
