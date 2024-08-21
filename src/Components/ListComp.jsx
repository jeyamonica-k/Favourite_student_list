
import { useState } from "react"
import Header from "./Header"

function ListComp({myarrlist,onNameClick}){
 
  return (
  
  <div>
    <Header></Header>
    <div>
      {
        myarrlist.map(function(item){
          return (<div className="flex gap-10 m-2" key={item.id}>
            <h1 className="text-xl w-20 ">{item.id}.{item.name}</h1>
            <button 
            className={"bg-black text-white p-1 border rounded-md text-xl cursor-pointer"}
            onClick={()=>onNameClick(item)}
            
            
            >Add to Favourite</button>
          </div>)
        })
      }
    </div>
  </div>)
}

export default ListComp
