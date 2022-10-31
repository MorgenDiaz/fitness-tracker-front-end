export default function NumberInput({
  label,
  placeholder,
  value = 0,
  onChangeHandler,
}) {
  const numberChanged = (event) => {
    onChangeHandler(event.target.value);
  };

  return (
    <div className="mb-3 ">
      <label
        htmlFor="exampleNumber0"
        className="form-label inline-block mb-2 text-gray-700"
      >
        {label}
      </label>
      <input
        type="number"
        min={0}
        onChange={numberChanged}
        className="
  form-control
  block
  w-full
  px-3
  py-1.5
  text-base
  font-normal
  text-gray-700
  bg-white bg-clip-padding
  border border-solid border-gray-300
  rounded
  transition
  ease-in-out
  m-0
  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
"
        id="exampleNumber0"
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
}
