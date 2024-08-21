import { Link } from "react-router-dom"

function Header(){
  return(<div className="bg-red-400 p-5 flex gap-4 text-2xl text underline">
    <Link to="/"><h1>List of Students</h1></Link>
   <Link to="/favouritestudent"><h1>Favourite Students</h1></Link>
   
  </div>)
}
export default Header