import { useEffect } from "react";
import { register } from "./api/users-controller";

function App() {
  useEffect(() => {
    console.log("yup");
    async function doStuff() {
      try {
        await register("gon", "rockpaper");
      } catch (error) {
        alert(error);
      }
    }
    doStuff();
  }, []);

  return <div className="App"></div>;
}

export default App;
