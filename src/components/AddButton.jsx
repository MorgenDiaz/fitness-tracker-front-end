const AddButton = ({ onClick }) => {
  return (
    <svg
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      fill="hsl(240, 5.3%, 26.1%)"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="hsl(240, 5.9%, 90%)"
      className="  w-8 h-8 border-2 border-gray-900 bg-gray-700 rounded-xl"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4.5v15m7.5-7.5h-15"
      />
    </svg>
  );
};

export default AddButton;
