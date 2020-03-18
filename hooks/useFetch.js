import {useContext, useState, useEffect} from 'react'
import {RestContext} from '../providers'

export default function useFetch(){

    const API = useContext(RestContext);

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [abort, setAbort] = useState(null);

    useEffect( async () => {

        setLoading(true);

        const controller = new AbortController();
        const signal = controller.signal;

        setAbort(() => controller.abort())

        try {

            const response = await fetch(API.url, {signal});
            const result = await response.json();
            setData(result);
            setLoading(false);
            setError(null);

        }catch(err){
            setError(err);
            setLoading(false);
        }

        return () => {
            controller.abort();
        }

    }, [API.url]);

    return {
        data,
        loading,
        error,
        abort,
    }
}