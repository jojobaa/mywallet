import Login from "./Login";
import Cadastre from "./Cadastre";
import Registration from "./Registration";
import Input from "./Input";
import Output from "./Output";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { ContextAPI } from "./pages/ContextAPI";
// import { ContextProvider } from "./pages/ContextPercentual"

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/cadastre" element={<Cadastre />} />
                <Route path="/registration" element={<Registration />} />
                <Route path="/input" element={<Input />} />
                <Route path="/output" element={<Output />} /> 
            </Routes>
        </BrowserRouter>
    )
}