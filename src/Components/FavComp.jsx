
import { useState } from "react"
import Header from "./Header"

function FavComp({temparr,settemparr}){
  
  function handleDelete(removeid){
    var trimarr=temparr.filter(function(item){
      if(removeid === item.id){
        return false
      }
      else{
        return true
      }
    })
    settemparr(trimarr)
  }
 
  return (
    
  <div>
    <Header></Header>
    {
      temparr.map(function(item,index){
        return (<div className="flex gap-10 m-2" key={item.id}>
          <h1 className="text-xl w-20 ">{index+1}.{item.name}</h1>
          <button className="bg-black text-white p-1 border rounded-md text-xl" onClick={()=>handleDelete(item.id)}>Remove</button>
        </div>)
      })
    }
    
  </div>)
}

export default FavComp