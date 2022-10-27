import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Landing from "../components/Landing";
import Login from "../components/Login";
import Register from "../components/Register";
import Reset from "../components/Reset";

const SetupRoutes = () =>{
return(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/reset" element={<Reset />} />
        </Routes>
    </BrowserRouter>
)

}
export default SetupRoutes;