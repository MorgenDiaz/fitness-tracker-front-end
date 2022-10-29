export default function Activity({ activity }) {
  const { name, description } = activity;
  return (
    <div className="grow flex flex-col items-center p-4 rounded-lg bg-gray-200">
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
}
