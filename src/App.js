import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

import Register from "./routes/Register";

function App() {
  /*useEffect(() => {
    console.log("yup");
    async function doStuff() {
      try {
        await register("gon", "rockpaper");
      } catch (error) {
        alert(error);
      }
    }
    doStuff();
  }, []);*/

  return (
    <div className="App">
      <BrowserRouter>
        <Register />
      </BrowserRouter>
    </div>
  );
}

export default App;
