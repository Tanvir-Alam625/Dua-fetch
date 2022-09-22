import React,{useState,useEffect} from "react"
import Dua from "./Dua"
import Spinner from '../Shared/Spinner';
import "../../App.css"
import Category from "../Category/Category"
import Setting from "../Setting/Setting"

const Home = ()=>{
    const [spinner, setSpinner]=useState(null);
    const [duaId,setDuaId]=useState(1);
    const [dua,setDua]=useState(null);
    const [category,setCategory]=useState(null);
   
    useEffect(()=>{
     
        fetch(`https://dua-backend.herokuapp.com/dua-main/dua/${duaId}`)
        .then(res=>res.json())
        .then(data=> setDua(data?.result))
  
    },[duaId])
    const getCategory = () =>{
        fetch(`https://dua-backend.herokuapp.com/dua-main/category`).then(res=>res.json()).then(data=> setCategory(data?.result))
      } 
    getCategory();
    const handelDua=(id)=>{
        setDuaId(id);
      }
    return(
        <main className="app min-h-[100vh] mt-2 ">
            {
            category && <Category handelDua={handelDua}  category={category}/>
            }
           <div className="w-full h-[100vh] overflow-y-scroll mt-4">
                 {
                    dua?.map(d=>   <Dua  d={d}/>)
                }
           </div>
            <Setting />
        </main>
    );
}
export default Home;