import React from "react"

const Dua = ({d})=>{
    return(
        <div id={d?.dua_id} className="card card-compact p-4 mb-4 border w-full bg-base-100 shadow-xl">
           <h2 className=" text-xl my-4">{d?.dua_name_en} </h2>
           <div className="p-2 border-y">
                <p>Say ten times -</p>
                <div className="arabic-text flex justify-end">
                    <p className="my-2 text-2xl">{d?.dua_arabic}</p>
                </div>
                <p className='my-4'>{d?.bottom_bn} </p>
                <p className='my-4'>{d?.bottom_en} </p>
                <a href="" className="text-green-500 font-semibold"> Reference</a>
                <p>{d?.refference_en}</p>
            </div>
            <div className="dua-footer my-3">
                {
                    d?.audio && 
                    <audio controls>
                    <source src={d?.audio} type="audio/ogg" />
                </audio>
                }
          
            <div className='dua-icon'>

            </div>
            </div>
        </div>
    );
}
export default Dua;