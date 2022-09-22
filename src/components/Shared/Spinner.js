import React from "react";

const Spinner =()=>{
    return(
        <div className="w-full h-full flex justify-center my-4">
            <div class="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}
export default Spinner;