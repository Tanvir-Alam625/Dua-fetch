import React,{useState} from "react"
import Dua from "./Dua"
import Spinner from '../Shared/Spinner'
const Home = ()=>{
    const [spinner, setSpinner]=useState(true);
    
    if(spinner){
        return <Spinner />
    }
    return(
        <main className="main-content min-h-[100vh]  overflow-y-scroll">
            <Dua />
        </main>
    );
}
export default Home;