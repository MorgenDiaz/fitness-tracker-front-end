import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { StateContext } from "./context/StateContext";
import Loading from "./components/Loading";
import Navigation from "./Navigation";
import Register from "./routes/auth/Register";
import Routines from "./routes/routines/Routines";
import UserAuthentication from "./routes/auth/UserAuthentication";
import Login from "./routes/auth/Login";
import Activities from "./routes/activities/Activities";
import UserRoutines from "./routes/routines/UserRoutines";
import CreateRoutine from "./routes/routines/CreateRoutine";

function App() {
  const { isLoading } = useContext(StateContext);

  return (
    <>
      {isLoading && <Loading />}
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index={true} element={<Routines />} />
          <Route path="/auth" element={<UserAuthentication />}>
            <Route index={true} element={<Login />} />
            <Route path="/auth/register" element={<Register />} />
          </Route>
          <Route path="/activities" element={<Activities />} />
          <Route path="/my-routines" element={<UserRoutines />} />
          <Route path="/create-routine" element={<CreateRoutine />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
