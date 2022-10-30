import { useAllPublicRoutines } from "../../hooks/useRoutines";
import Routine from "./components/Routine";

export default function Routines() {
  const { routines } = useAllPublicRoutines();

  return (
    <div className="grow flex flex-col place-content-evenly content-evenly pt-10">
      <h2 className="pb-6 text-2xl font-semibold self-center text-gray-900 tracking-wide uppercase ">
        {"routines"}
      </h2>

      {routines?.map((routine) => {
        const { id } = routine;

        return <Routine key={id} routine={routine} />;
      })}
    </div>
  );
}
