import React from "react"
import { useParams } from "react-router-dom"

export default function User(){
    const {userid} = useParams();
    return(
        <div className="text-3xl text-[lightseagreen] drop-shadow-md font-bold bg-gray-600">
            User: {userid}
        </div>
    )
}