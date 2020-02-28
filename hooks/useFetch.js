import {useContext, useState, useEffect} from 'react'
import {RestContext} from '../providers'

export default function useFetch(){

    const API = useContext(RestContext);

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {

        setLoading(true);

        fetch(API.url)
        .then(response => response.json())
        .then(result => {
            setData(result);
            setLoading(false);
            setError(null);
        })
        .catch(err => {
            setError(err);
            setLoading(false);
        })
    }, [API.url]);

    return {
        data,
        loading,
        error,
    }
}