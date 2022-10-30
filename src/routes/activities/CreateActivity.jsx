import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useActivities } from "../../hooks/useActivities";
import {
  ErrorMessage,
  TextBox,
  BigTextBox,
  PrimaryButton,
} from "../../components";

export default function CreateActivity() {
  const navigate = useNavigate();
  const originalActivity = useLocation().state?.activity;

  const [name, setName] = useState(originalActivity?.name || "");
  const [description, setDescription] = useState(
    originalActivity?.description || ""
  );

  const { create, update, error } = useActivities();

  const formTitle = originalActivity ? "Update Activity" : "Create Activity";
  const actionButtonLabel = originalActivity ? "Update" : "Create";

  async function handleFormSubmission(event) {
    event.preventDefault();
    let success = false;

    if (originalActivity) {
      console.log("original: ", originalActivity);
      success = await update(originalActivity.id, {
        name,
        description,
      });
    } else {
      success = await create({ name, description });
    }

    if (success) navigate("/activities");
  }

  const handleNameChanged = (event) => {
    const inputName = event.target.value;
    setName(inputName);
  };

  const handleDescriptionChanged = (event) => {
    const inputDescription = event.target.value;
    setDescription(inputDescription);
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
            placeholder="Activity Name"
            value={name}
            required={true}
          />

          <BigTextBox
            onChange={handleDescriptionChanged}
            placeholder={"Description"}
            value={description}
            required={true}
          />

          <PrimaryButton value={actionButtonLabel} />
        </form>
      </div>
    </div>
  );
}
