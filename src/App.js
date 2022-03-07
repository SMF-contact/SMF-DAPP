import Header from "./assets/component/header";
import Dasboard from "./assets/component/pages/dasboard";
import { Routes, Route } from "react-router-dom"
import AntiScamAi from "./assets/component/pages/antiScamAi"


function App() {
  return (
    <>
    <Header />
    <Routes> 
      <Route path="/" element={ <Dasboard/> } /> 
      <Route path="/antiscamai" element={ <AntiScamAi/> } /> 
    </Routes>
    </>
  );
}

export default App;
