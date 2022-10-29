import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { StateContext } from "./context/StateContext";
import Loading from "./components/Loading";
import Navigation from "./Navigation";
import Register from "./routes/Register";
import Routines from "./routes/routines/Routines";

function App() {
  const { isLoading } = useContext(StateContext);

  return (
    <>
      {isLoading && <Loading />}
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index={true} element={<Routines />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
