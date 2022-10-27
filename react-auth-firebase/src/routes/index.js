import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Landing from "../components/Landing";
import Login from "../components/Login";
import Register from "../components/Register";

const SetupRoutes = () =>{
return(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    </BrowserRouter>
)

}
export default SetupRoutes;