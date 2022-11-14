import "./App.css";
import { Route, Routes } from "react-router-dom";

import Review from "./pages/Review";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/review" element={<Review />}></Route>
      </Routes>
    </div>
  );
}

export default App;
