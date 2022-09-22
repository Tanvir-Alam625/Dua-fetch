import {useEffect,useState}from "react";
import './App.css';
import Category from "./components/Category/Category"
import Home from "./components/Home/Home"
import Setting from "./components/Setting/Setting"

function App() {
  const [category,setCategory]=useState(null);
  useEffect(()=>{
    const getCategory = async () =>{
      const res = await fetch(`https://dua-backend.herokuapp.com/dua-main/category`)
      const data = await res.json()
      await setCategory(data?.result)
      console.log(data);
    } 
    getCategory();

  },[])
 
  return (
    <div className="h-[100vh] w-full app">
      {
        category && <Category category={category}/>
      }
      <Home />
      <Setting />
    </div>
  );
}

export default App;
