import { useEffect, useState } from "react";

const useFetch = (url,str) => {
    const [obj,setObj] = useState(null);
    const [error,setError] = useState(null);
    const [isPending,setIsPending] = useState(true);

    useEffect( () => {
        const abortCont = new AbortController();

        fetch(url, {signal: abortCont.signal})
        .then( (res) =>{
            if(!res.ok){
                throw Error('Server Error');
            }
            return res.json();
        })
        .then( (data) =>{
            (str === "Bodies" ? setObj(data.bodies) : setObj(data));
            setIsPending(false);
            setError(null);
        })
        .catch( (err) => {
            if(err.name !== 'AbortError'){
                setIsPending(false);
                setError(err.message);
            }
            else console.log("Fetch Aborted :)");
        })
        return () => abortCont.abort();
    },[url,str]);

    return {obj,isPending,error};
}
 
export default useFetch;