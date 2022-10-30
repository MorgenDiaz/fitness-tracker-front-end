import { Link } from "react-router-dom";

export default function Activity({ activity, isEditable = false }) {
  const { name, description } = activity;
  return (
    <div className="grow flex flex-col items-center p-4 rounded-lg bg-gray-200">
      <h3>{name}</h3>
      <p>{description}</p>

      {isEditable && (
        <Link
          to="/create-activity"
          state={{ activity: activity }}
          className="pt-2 uppercase self-center text-gray-800"
        >
          {"edit"}
        </Link>
      )}
    </div>
  );
}
