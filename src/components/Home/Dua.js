import React from "react"

const Dua = ()=>{
    return(
        <div className="card card-compact p-4 border w-full bg-base-100 shadow-xl">
           <h2 className=" text-xl my-4">Dua Title </h2>
           <div className="p-2 border-y">
                <p>Say ten times -</p>
                <div className="arabic-text flex justify-end">
                    <p className="my-2 text-2xl"> الإعلان</p>
                </div>
                <p className='my-4'>dua english dua english  dua english dua english  dua english </p>
                <a href="" className="text-green-500 font-semibold"> Reference</a>
                <p>Bukhari No: </p>
            </div>
            <div className="dua-footer my-3">
            <audio controls>
                {/* <source src="horse.ogg" type="audio/ogg"> */}
                Your browser does not support the audio tag.
            </audio>
            <div className='dua-icon'>
                
            </div>
            </div>
        </div>
    );
}
export default Dua;