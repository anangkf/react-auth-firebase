import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../components/Login";

const SetupRoutes = () =>{
return(
    <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login />} />
        </Routes>
    </BrowserRouter>
)

}
export default SetupRoutes;