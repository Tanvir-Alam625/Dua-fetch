import React,{useState,useEffect} from "react"
import Cate from "./Cate"

const Category = ({category, handelDua})=>{
    const [subCategory,setSubCategory]=useState(null);
    
      useEffect(()=>{
        fetch(`https://dua-backend.herokuapp.com/dua-main/sub-category/`)
        .then(res=>res.json())
        .then(data=> setSubCategory(data?.result))
      },[])
       
    return(
        <div className="category-content h-[100vh] overflow-y-scroll shadow-xl border px-2 w-full ">
            <h3 className="my-2 text-center text-2xl">Category</h3>
            {
                 subCategory && category?.map(cate=> <Cate cate={cate} handelDua={handelDua}  subCategory={subCategory}/> )
  
            }
        </div>
    );
}
export default Category;