import { Outlet, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./context/UserContext";
import Header from "./Header";
import { useEffect } from "react";

export default function Navigation() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  console.log(user);

  let navLinks = [
    { name: `Sign in/out`, path: `/auth` },
    { name: `Routines`, path: `/routines` },
    { name: `Activities`, path: `/activities` },
  ];

  useEffect(() => {
    /*if (user) {
      navigate("/");
    } else {
      navigate("/register");
    }*/
  }, [user, navigate]);

  return (
    <div className="flex flex-wrap min-h-[100vh] justify-center content-start bg-gray-400">
      <Header links={navLinks} />

      <div className="content-area flex grow justify-center lg:max-w-4xl ">
        <Outlet />
      </div>
    </div>
  );
}
