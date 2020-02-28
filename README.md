# data-fetching

Hooks:

* useFetch
* useGet -- comming soon -- 
* usePost  -- comming soon --
* usePut  -- comming soon --
* useHead  -- comming soon --
* useDelete  -- comming soon --
* usePatch  -- comming soon --
* useOptions  -- comming soon --

# useFetch

import React from 'react'
import {RestProvider, useFetch} from 'data-fetching'

export function View(){
    
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


function App() {
  return (
    <RestProvider value={{url: 'https://jsonplaceholder.typicode.com/posts'}}>
      <View />
    </RestProvider>
  );
}


