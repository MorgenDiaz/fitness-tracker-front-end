import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAll } from "../../api/routines-controller";
import Routine from "./Routine";

export default function Routines() {
  const navigate = useNavigate();

  const [routines, setRoutines] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getAll();
        console.log("quaaah:", data);
        setRoutines(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="grow flex flex-col place-content-evenly content-evenly pt-10">
      <h2 className="pb-6 text-2xl font-semibold self-center text-gray-900 tracking-wide uppercase ">
        {"create an account"}
      </h2>

      {routines.map((routine) => {
        const { id } = routine;

        return <Routine key={id} routine={routine} />;
      })}
    </div>
  );
}
