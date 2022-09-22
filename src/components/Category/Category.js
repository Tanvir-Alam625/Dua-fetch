import React,{useState,useEffect} from "react"
import Cate from "./Cate"

const Category = ({category})=>{
    const [subCategory,setSubCategory]=useState(null);
    
      const getSubCategory = async () =>{
        const res = await fetch(`https://dua-backend.herokuapp.com/dua-main/sub-category/`)
        const data = await res.json();
        setSubCategory(data?.result);
      }
      getSubCategory();
    return(
        <div className="category-content shadow-xl border px-2 ">
            <h3 className="my-2 text-center text-2xl">Category</h3>
            {
                 subCategory && category?.map(cate=> <Cate cate={cate}  subCategory={subCategory}/> )
                    //  {
                    // const  subC=  subCategory.filter(cat=> cat.cat_id === cate.cat_id)
                    // console.log(subC, "subCate")
                    // return(
                    //     <div cate={cate} className="card  bg-base-100 shadow-xl py-4 p-2 my-2">
                    //             <div className="grid grid-cols-1 gap-4">
                    //                 <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    //                     <div className="collapse-title text-xl font-medium">
                    //                         {cate?.cat_name_en}
                    //                     </div>
                    //                     <div className="collapse-content"> 
                    //                     {
                    //                         // subCategory.filter(cat=> cat.cat_id === cate.cat_id)
                    //                     }
                    //                     </div>
                    //                 </div>
                    //             </div>
                    //     </div>
                    // )
                // })
            }
        </div>
    );
}
export default Category;