import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Register from "./routes/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  );
}

export default App;
