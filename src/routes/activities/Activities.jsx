import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { useActivities } from "../../hooks/useActivities";
import Activity from "./Activity";

export default function Activities() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  const { activities } = useActivities();

  return (
    <div className="grow flex flex-col place-content-evenly content-evenly pt-10">
      {console.log(activities)}
      <h2 className="pb-6 text-2xl font-semibold self-center text-gray-900 tracking-wide uppercase ">
        {"Activities"}
      </h2>

      {user && (
        <button
          onClick={() => {
            navigate("/create-activity");
          }}
          className="p-2  rounded-lg shadow-gray-900 shadow-md self-center  bg-gray-300 text-gray-800 mb-6 self-center text-gray-200 uppercase font-semi-bold tracking-wide "
        >
          {"Create New Activity"}
        </button>
      )}

      <div className="flex flex-wrap gap-4">
        {activities.map((activity) => {
          return <Activity key={activity.id} activity={activity} />;
        })}
      </div>
    </div>
  );
}
