import React,{useState} from "react";

const Cate = ({cate,subCategory, handelDua})=>{
    const filteringCat= subCategory.filter(ca=> ca?.cat_id === cate.cat_id);

    return(
        <div onClick={()=>handelDua(cate?.cat_id)}  className="card  bg-base-100 shadow-xl py-4 p-2 my-2">
                <div className="grid grid-cols-1 gap-4">
                    <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            {cate?.cat_name_en}
                        </div>
                        <div className="collapse-content"> 
                        {
                            filteringCat?.map(c=> {
                                return(
                                    // <a href={`#${c?.no_of_dua}`} className=''>
                                        <p href={`#${c?.no_of_dua}`} className="py-1 border my-2">{c?.subcat_name_en} </p>
                                    // </a>
                                )
                            } 
                            )
                        }
                        </div>
                    </div>
                </div>
        </div>
    )

}
export default Cate;