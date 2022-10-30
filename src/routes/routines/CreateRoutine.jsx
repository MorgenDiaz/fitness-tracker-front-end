import { useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { createRoutine } from "../../api/routines-controller";
import {
  ErrorMessage,
  TextBox,
  BigTextBox,
  PrimaryButton,
} from "../../components";

export default function CreateRoutine() {
  const navigate = useNavigate();
  const originalRoutine = useLocation().state?.routine;

  const [name, setName] = useState(originalRoutine?.name || "");
  const [goal, setGoal] = useState(originalRoutine?.goal || "");
  const [isPublic, setIsPublic] = useState(originalRoutine?.isPublic || false);
  const [errorMessage, setErrorMessage] = useState("");

  const { user } = useContext(UserContext);

  async function handleFormSubmission(event) {
    event.preventDefault();
    try {
      await createRoutine(user.token, {
        name,
        goal,
        isPublic,
      });
      navigate("/my-routines");
    } catch (error) {
      setErrorMessage(error.message);
    }
  }

  const handleNameChanged = (event) => {
    const inputName = event.target.value;
    setName(inputName);
  };

  const handleGoalChanged = (event) => {
    const inputGoal = event.target.value;
    setGoal(inputGoal);
  };

  const handleIsPublicChanged = (event) => {
    const inputIsPublic = event.target.checked;
    setIsPublic(inputIsPublic);
  };

  return (
    <div className="grow flex flex-col pt-12 px-6">
      <h2 className="pb-6 text-2xl font-semibold self-center text-gray-900 tracking-wide uppercase ">
        {"Create Routine"}
      </h2>
      <div className="self-center">
        {errorMessage && <ErrorMessage message={errorMessage} />}
      </div>
      <div className="flex justify-center">
        <form
          onSubmit={handleFormSubmission}
          className="flex flex-col gap-4 lg:max-w-xl grow"
        >
          <TextBox
            onChange={handleNameChanged}
            placeholder="Routine Name"
            value={name}
            required={true}
          />

          <BigTextBox
            onChange={handleGoalChanged}
            placeholder={"Goal"}
            value={goal}
            required={true}
          />

          <div className="flex justify-center gap-2">
            <label className="font-semibold text-gray-900" htmlFor="is_public">
              Public
            </label>
            <input
              type="checkbox"
              name="is_public"
              id="is_public"
              checked={isPublic}
              onChange={handleIsPublicChanged}
            />
          </div>

          <PrimaryButton value={"Create"} />
        </form>
      </div>
    </div>
  );
}
