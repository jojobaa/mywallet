import Login from "./Login";
import Cadastre from "./Cadastre";
// import Habits from "./pages/Habits";
// import Today from "./pages/Today";
// import Historic from "./pages/Historic";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { ContextAPI } from "./pages/ContextAPI";
// import { ContextProvider } from "./pages/ContextPercentual"

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                 <Route path="/cadastre" element={<Cadastre />} />
                {/* <Route path="/habits" element={<Habits />} />
                <Route path="/today" element={<Today />} />
                <Route path="/historic" element={<Historic />} />  */}
            </Routes>
        </BrowserRouter>
    )
}