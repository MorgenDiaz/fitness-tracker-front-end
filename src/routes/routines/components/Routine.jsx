import RoutineActivities from "./RoutineActivities";

export default function Routine({ routine }) {
  const { creatorId, creatorName, id, name, goal, activities } = routine;

  return (
    <div className=" flex flex-col bg-gray-100 px-6 pt-8 pb-4 border-b border-gray-500">
      <div className="flex items-baseline justify-between mb-4">
        <h3 className="text-gray-900 text-xl">{name}</h3>

        <h3 className="justify-self-end text-gray-900 text-lg font-bold leading-tight text-right">
          {creatorName}
        </h3>
      </div>

      <div className="mb-8 pl-2">
        <p className="mb-4">{goal}</p>
        <RoutineActivities activities={activities} />
      </div>
    </div>
  );
}
