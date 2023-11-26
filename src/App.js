import {Routes,Route} from "react-router-dom"
import './App.css';
import { Container } from "./components/Container";

function App() {
  return (
   <Routes>
    <Route path="/" element={<Container />} />
   </Routes>
  );
}

export default App;
