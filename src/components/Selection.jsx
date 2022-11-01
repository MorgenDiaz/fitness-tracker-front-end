const Selection = ({ label, options = [], onSelectionChanged }) => {
  const handleSelectionChanged = (event) => {
    onSelectionChanged(event.target.value);
  };

  return (
    <div className="mb-3 xl:w-96">
      <label
        htmlFor="form-select"
        className="form-label inline-block mb-2 text-gray-700"
      >
        {label}
      </label>
      <select
        className="form-select appearance-none
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding bg-no-repeat
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        aria-label="Default select example"
        onChange={handleSelectionChanged}
      >
        {options.map((name, index) => {
          return <option key={index}>{name}</option>;
        })}
      </select>
    </div>
  );
};

export default Selection;
