import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../components/Login";
import Register from "../components/Register";

const SetupRoutes = () =>{
return(
    <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    </BrowserRouter>
)

}
export default SetupRoutes;