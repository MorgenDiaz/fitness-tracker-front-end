import { Link } from "react-router-dom";
import { useRoutineActivities } from "../../../hooks/useRoutineActivities";
export default function RoutineActivity({
  activity,
  canEdit = false,
  activityDeletedHandler,
}) {
  const { name, count, duration, description } = activity;

  const { destroy } = useRoutineActivities();

  const handleDeleteClicked = async () => {
    const success = await destroy(activity.routineActivityId);

    if (success) {
      activityDeletedHandler();
    }
  };

  return (
    <div className="grow flex flex-col items-stretch py-4 ">
      <div className="grow flex justify-between items-end gap-x-24 pb-2">
        <p className="text-gray-900 text-lg font-bold">{name}</p>
        {canEdit && (
          <div className="flex gap-x-2">
            <Link
              to="/edit-routine-activity"
              className="uppercase text-gray-800"
              state={{ routineActivity: activity }}
            >
              {"Edit"}
            </Link>

            <button
              onClick={handleDeleteClicked}
              className="align-bottom uppercase text-gray-800"
            >
              delete
            </button>
          </div>
        )}
      </div>
      <div className="grow flex justify-between gap-x-24 bg-blue-200">
        <div className="flex">
          <p>{"Count: "}</p>
          <p>{count}</p>
        </div>
        <div className="flex">
          <p>{"Duration: "}</p>
          <p>{duration}</p>
        </div>
      </div>
      <p className="pt-4 self-center text-gray-700">{description}</p>
    </div>
  );
}
