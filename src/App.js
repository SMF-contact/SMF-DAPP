import Header from "./assets/component/header";
import Dasboard from "./assets/component/pages/dasboard";
import { Routes, Route } from "react-router-dom"

function name(params) {
  
}


function App() {
  return (
    <>
    <Header />
    <Routes> 
      <Route path="/" element={ <Dasboard/> } /> 
    </Routes>
    </>
  );
}

export default App;
