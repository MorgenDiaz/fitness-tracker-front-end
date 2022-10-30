import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useRoutines } from "../../hooks/useRoutines";
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

  const { create, update, error } = useRoutines();

  const formTitle = originalRoutine ? "Update Routine" : "Create Routine";
  const actionButtonLabel = originalRoutine ? "Update" : "Create";

  async function handleFormSubmission(event) {
    event.preventDefault();
    let success = false;

    if (originalRoutine) {
      success = await update(originalRoutine.id, { name, goal, isPublic });
    } else {
      success = await create({ name, goal, isPublic });
    }

    if (success) navigate("/my-routines");
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
        {formTitle}
      </h2>
      <div className="self-center">
        {error && <ErrorMessage message={error.message} />}
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

          <PrimaryButton value={actionButtonLabel} />
        </form>
      </div>
    </div>
  );
}
