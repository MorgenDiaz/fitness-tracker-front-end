import { BrowserRouter } from "react-router-dom";

import Register from "./routes/Register";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Register />
      </BrowserRouter>
    </div>
  );
}

export default App;
