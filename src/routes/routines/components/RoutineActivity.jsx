import { Link } from "react-router-dom";

export default function RoutineActivity({ activity, canEdit = false }) {
  const { name, count, duration, description } = activity;

  return (
    <div className="grow flex flex-col items-stretch py-4 ">
      <div className="grow flex justify-between items-end gap-x-24 pb-2">
        <p className="text-gray-900 text-lg font-bold">{name}</p>
        {canEdit && (
          <Link
            to="/edit-routine-activity"
            className="pt-2 uppercase self-center text-gray-800"
            state={{ routineActivity: activity }}
          >
            {"Edit"}
          </Link>
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
