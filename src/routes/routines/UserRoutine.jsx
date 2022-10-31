import { useNavigate } from "react-router-dom";
import { useRoutines } from "../../hooks/useRoutines";
import { EditButton } from "../../components";
import CreateRoutineActivity from "./CreateRoutineActivity";
import RoutineActivities from "./components/RoutineActivities";

export default function UserRoutine({
  routine,
  onRoutineDeleted,
  onActivityAddedHandler,
}) {
  const navigate = useNavigate();
  const { creatorId, creatorName, id, name, goal, activities } = routine;

  const { destroy } = useRoutines();

  return (
    <div className=" flex flex-col bg-gray-100 px-6 pt-2 pb-4 border-b border-gray-500">
      <div className="flex justify-end gap-4 ">
        <EditButton
          onClick={() => {
            navigate("/create-routine", { state: { routine } });
          }}
        />

        <svg
          onClick={async () => {
            const success = await destroy(id);
            if (success) {
              onRoutineDeleted();
            }
          }}
          xmlns="http://www.w3.org/2000/svg"
          fill="#ef9a9a"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="#333333"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>

      <div className="flex items-baseline justify-between mt-4 mb-4 px-1">
        <h3 className="text-gray-900 text-xl">{name}</h3>

        <h3 className="justify-self-end text-gray-900 text-lg font-bold leading-tight text-right">
          {creatorName}
        </h3>
      </div>

      <div className="mb-8 pl-2 pr-4">
        <p className="mb-4">{goal}</p>

        <div>
          <CreateRoutineActivity
            onActivityAddedHandler={onActivityAddedHandler}
            routineId={routine.id}
          />
        </div>
        <RoutineActivities activities={activities} />
      </div>
    </div>
  );
}
