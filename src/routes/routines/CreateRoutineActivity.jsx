import { useState } from "react";
import { AddButton, NumberInput, Selection } from "../../components";
import { useActivities } from "../../hooks/useActivities";
import { useRoutines } from "../../hooks/useRoutines";

export default function CreateRoutineActivity({
  routineId,
  onActivityAddedHandler,
}) {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);
  const [duration, setDuration] = useState(0);

  const { activities } = useActivities();
  const { addActivity } = useRoutines();

  const handleCreateRoutineActivityClicked = async (event) => {
    const activity = activities.find((activity) => activity.name === name);

    const success = await addActivity(routineId, {
      activityId: activity.id,
      count: Number(count),
      duration: Number(duration),
    });

    setCount(0);
    setDuration(0);

    if (success) {
      onActivityAddedHandler();
    }
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
    <form className="flex flex gap-4 lg:max-w-xl grow">
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
