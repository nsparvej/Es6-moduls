import Watch from "./components/Watch/Watch";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import Watches from "./components/Watch/Watches";

function App() {
  const [watches, setWatches] = useState([]);

  useEffect(() => {
    fetch("../src/components/Utilities/Data.json")
      .then((res) => res.json())
      .then((data) => setWatches(data));
  }, []);


  return (
    <>
      <h1>Vite + React</h1>
      <Watches watch={watches}></Watches>
      {
        watches.map(watch =>{
          return <Watch watch = {watch}  key={watch?.price} />
        })
      }
      
    </>
  );
}

export default App;
