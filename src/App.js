import Header from "./Header";
import Register from "./routes/Register";

function App() {
  return (
    <div className="App flex flex-wrap justify-center">
      <Header />

      <div className="content-area flex grow justify-center lg:max-w-4xl bg-blue-400">
        <Register />
      </div>
    </div>
  );
}

export default App;
