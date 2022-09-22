import {useEffect,useState}from "react";
import './App.css';
import Category from "./components/Category/Category"
import Home from "./components/Home/Home"
import Setting from "./components/Setting/Setting"

function App() {
  // const [category,setCategory]=useState(null);
  // // const [dua,setDua]=useState(null);
 
  // // console.log(dua);
  // const getCategory = () =>{
  //   fetch(`https://dua-backend.herokuapp.com/dua-main/category`).then(res=>res.json()).then(data=> setCategory(data?.result))

  // } 
  // getCategory();

  
  return (
    <div className="h-[100vh] w-full">
      <Home />
    </div>
  );
}

export default App;
