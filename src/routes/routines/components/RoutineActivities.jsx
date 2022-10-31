import RoutineActivity from "./RoutineActivity";

export default function RoutineActivities({
  activities,
  canEdit = false,
  activityDeletedHandler,
}) {
  return (
    <div className="flex flex-col px-4">
      <p className="text-gray-700 font-light">{"Activities"}</p>

      {activities.map((activity) => {
        return (
          <RoutineActivity
            key={activity.id}
            activity={activity}
            canEdit={canEdit}
            activityDeletedHandler={activityDeletedHandler}
          />
        );
      })}
    </div>
  );
}
