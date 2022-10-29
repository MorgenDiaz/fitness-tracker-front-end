import { Route, Routes } from "react-router-dom";
import Navigation from "./Navigation";
import Register from "./routes/Register";
import Routines from "./routes/routines/Routines";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index={true} element={<Routines />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  );
}

export default App;
