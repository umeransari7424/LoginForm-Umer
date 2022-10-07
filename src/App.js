import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Base from "./Components/Layouts/Base";
import Signup from "./Components/Elements/Signup";
import Signin from "./Components/Elements/Signin";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Base>
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route index path="/Signup" element={<Signup />} />
            <Route index path="/Signin" element={<Signin />} />
          </Routes>
        </Base>
      </BrowserRouter>
    </div>
  );
}

export default App;
