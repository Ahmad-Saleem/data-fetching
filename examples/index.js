import React from 'react'
import {RestProvider, useFetch} from '../'

export default function Examples(){
    return (
        <RestProvider value={{url: 'https://jsonplaceholder.typicode.com/posts'}}>
            <View />
        </RestProvider>
    )
}


function View(){
    
    const {data, loading, error} = useFetch();

    if(loading) return <div>Loading...</div>

    if(!error && data) return (
        <div>
            {
                data.map((item,index) => <div key={index}>{item.title}</div>)
            }
        </div>
    )
}



