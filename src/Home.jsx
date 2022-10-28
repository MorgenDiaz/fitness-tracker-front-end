import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Home() {
  return (
    <div className="flex flex-wrap justify-center">
      <Header />

      <div className="content-area flex grow justify-center lg:max-w-4xl bg-blue-400">
        <Outlet />
      </div>
    </div>
  );
}
