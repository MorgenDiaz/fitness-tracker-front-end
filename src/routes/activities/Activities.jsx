import { useEffect } from "react";
import { getAll } from "../../api/activities-controller";
import { useAllPublicActivities } from "../../hooks/useActivities";
import Activity from "./Activity";

export default function Activities() {
  const { activities } = useAllPublicActivities();

  return (
    <div className="grow flex flex-col place-content-evenly content-evenly pt-10">
      {console.log(activities)}
      <h2 className="pb-6 text-2xl font-semibold self-center text-gray-900 tracking-wide uppercase ">
        {"Activities"}
      </h2>

      <div className="flex flex-wrap gap-4">
        {activities.map((activity) => {
          return <Activity key={activity.id} activity={activity} />;
        })}
      </div>
    </div>
  );
}
