import { BrowserRouter, Route, Routes } from "react-router-dom";
import Careers from "./components/Careers";
import Home from "./components/Home";
import AppBar from "./components/AppBar";

const App = () => {
  return (
    <div>
      <AppBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/careers" element={<Careers />} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App