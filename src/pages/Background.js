import Navbar from "./Navbar";
import Tab from "./Tab";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function Background() {
    return (
        <div className="main">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navbar />}>
                    </Route>
                </Routes>
            </BrowserRouter>
            <Tab />
        </div>
    )
}
export default Background;