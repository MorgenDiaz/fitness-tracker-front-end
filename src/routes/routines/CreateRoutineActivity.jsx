import { useState } from "react";
import { useLocation } from "react-router-dom";
import { AddButton, NumberInput, Selection } from "../../components";
import { useActivities } from "../../hooks/useActivities";
import { useRoutines } from "../../hooks/useRoutines";

export default function CreateRoutineActivity({
  routineId,
  onActivityAddedHandler,
}) {
  const originalRoutineActivity = useLocation().state?.routineActivity;

  const [name, setName] = useState(originalRoutineActivity?.name || "");
  const [count, setCount] = useState(originalRoutineActivity?.count || 0);
  const [duration, setDuration] = useState(
    originalRoutineActivity?.duration || 0
  );

  const { activities } = useActivities();
  const { addActivity, error } = useRoutines();

  const handleCreateRoutineActivityClicked = async (event) => {
    const activity = activities.find((activity) => activity.name === name);

    const success = await addActivity(routineId, {
      activityId: activity.id,
      name,
      count,
      duration,
    });

    console.log(success);
    if (success) {
      onActivityAddedHandler();
    }
    console.log(error);
  };

  const handleUpdateRoutineActivityClicked = (event) => {
    event.preventDefault();
  };

  const handleActivityNameChanged = (selectedActivity) => {
    setName(selectedActivity);
  };

  const handleCountChanged = (inputCount) => {
    setCount(inputCount);
  };

  const handleDurationChanged = (inputDuration) => {
    setDuration(inputDuration);
  };

  return (
    <form
      onSubmit={handleUpdateRoutineActivityClicked}
      className="flex flex gap-4 lg:max-w-xl grow"
    >
      <Selection
        label={"Add Activity"}
        options={activities.map((activity) => activity.name)}
        onSelectionChanged={handleActivityNameChanged}
      />

      <NumberInput
        label={"Set Count"}
        placeholder={"Count"}
        value={count}
        onChangeHandler={handleCountChanged}
      />

      <NumberInput
        label={"Set Duration"}
        placeholder={"Duration"}
        value={duration}
        onChangeHandler={handleDurationChanged}
      />
      <div className="flex items-center">
        <AddButton onClick={handleCreateRoutineActivityClicked} />
      </div>
    </form>
  );
}
