import { useNavigate } from "react-router-dom";
import { useUsers } from "../../hooks/useUsers";
import UserRoutine from "./UserRoutine";

export default function UserRoutines() {
  const navigate = useNavigate();
  const { routines, refreshRoutines } = useUsers();

  const handleRoutineDeleted = () => {
    refreshRoutines();
  };

  const handleActivityAdded = () => {
    refreshRoutines();
  };

  const handleActivityDeleted = () => {
    refreshRoutines();
  };

  return (
    <div className="grow flex flex-col place-content-evenly content-evenly pt-10">
      <h2 className="pb-6 text-2xl font-semibold self-center text-gray-900 tracking-wide uppercase ">
        {"my routines"}
      </h2>

      <button
        onClick={() => {
          navigate("/create-routine");
        }}
        className="p-2  rounded-lg shadow-gray-900 shadow-md self-center  bg-gray-300 text-gray-800 mb-6 self-center text-gray-200 uppercase font-semi-bold tracking-wide "
      >
        {"Create New Routine"}
      </button>

      {routines?.map((routine) => {
        const { id } = routine;

        return (
          <UserRoutine
            key={id}
            routine={routine}
            onRoutineDeleted={handleRoutineDeleted}
            onActivityAddedHandler={handleActivityAdded}
            onActivityDeletedHandler={handleActivityDeleted}
          />
        );
      })}
    </div>
  );
}
