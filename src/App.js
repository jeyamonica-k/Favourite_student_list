import ListComp from "./Components/ListComp";
import FavComp from "./Components/FavComp";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { useState } from "react";
import { isDisabled } from "@testing-library/user-event/dist/utils";



function App() {
  
  const[temparr,settemparr]=useState([])
  const [myarrlist,setmyarrlist] = useState([
    {id:1, name:"Nivetha"},
    {id:2, name:"Henry"},
    {id:3, name:"George"},
    {id:4, name:"Sofia"},
    {id:5, name:"Nisha"},
    {id:6, name:"Liya"},
    {id:7, name:"Rithu"},
    {id:8, name:"Jack"}
  ])

  function handleAdd(props){
    
    const updatedNames=[...temparr,props]
    settemparr(updatedNames)
    console.log(temparr)
  }
 
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<ListComp myarrlist={myarrlist} onNameClick={handleAdd}  temparr={temparr} />}></Route>
    <Route path="/favouritestudent" element={<FavComp myarrlist={myarrlist} temparr={temparr} settemparr={settemparr}/>}></Route>
  </Routes></BrowserRouter>)
}

export default App;

