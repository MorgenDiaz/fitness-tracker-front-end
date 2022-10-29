import { Outlet, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "./context/UserContext";
import Header from "./Header";
import { useEffect } from "react";

export default function Navigation() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const [navLinks, setNavLinks] = useState([]);
  console.log(user);

  useEffect(() => {
    const navLinksSignedIn = [
      { name: `Sign out`, path: `/auth` },
      { name: `Routines`, path: `/routines` },
      { name: `My Routines`, path: `/my-routines` },
      { name: `Activities`, path: `/activities` },
    ];

    const navLinksSignedOut = [
      { name: `Sign in`, path: `/auth` },
      { name: `Routines`, path: `/routines` },
      { name: `Activities`, path: `/activities` },
    ];

    if (user) {
      setNavLinks(navLinksSignedIn);
      //navigate("/");
    } else {
      //navigate("/register");
      setNavLinks(navLinksSignedOut);
    }
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
