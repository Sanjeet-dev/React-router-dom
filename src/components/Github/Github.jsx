
import React, { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //    fetch('https://api.github.com/users/Sanjeet-dev')
    //    .then((response)=>response.json())
    //    .then((data)=>{
    //         console.log(data);
    //         setData(data);
    //    })
    //    .catch((error)=>console.log(error)) 
    // }, [])

  return (
    <div className="text-center m-4 bg-gray-500 text-white p-4 text-3xl">
      Github Followers: {data.followers}
      <img src={data.avatar_url} alt="Git Profile" width={300} height={100} />
    </div>
  )
}

export default Github

export const githubInfoLoader = async() => {
    const response = await fetch("https://api.github.com/users/Sanjeet-dev")
    return response.json();
}