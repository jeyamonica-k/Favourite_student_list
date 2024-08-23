
import Header from "./Header"

function ListComp({myarrlist,onNameClick,temparr}){

  const isFavorited = (studentId) => {
    return temparr.some(fav => fav.id === studentId);
}
  return (
  
  <div>
    <Header></Header>
    <div>
      {
        myarrlist.map(function(item){
          return (<div className="flex gap-10 m-2" key={item.id}>
            <h1 className="text-xl w-20 ">{item.id}.{item.name}</h1>
            <button 
            
            className={`px-4 py-2 rounded text-2xl ${
              isFavorited(item.id) ? 'bg-gray-400 text-white cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-700 text-black cursor-pointer '
            }`}
            onClick={()=>onNameClick(item)}
            disabled={isFavorited(item.id)}
            >Add to Favourite</button>
          </div>)
        })
      }
    </div>
  </div>)
}

export default ListComp
