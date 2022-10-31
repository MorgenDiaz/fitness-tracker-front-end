import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useRoutineActivities } from "../../hooks/useRoutineActivities";
import { PrimaryButton, NumberInput } from "../../components";

export default function EditRoutineActivity() {
  const navigate = useNavigate();
  const originalRoutineActivity = useLocation().state?.routineActivity;

  const [count, setCount] = useState(originalRoutineActivity?.count || 0);
  const [duration, setDuration] = useState(
    originalRoutineActivity?.duration || 0
  );

  const { update } = useRoutineActivities();

  const handleUpdateRoutineActivityClicked = async (event) => {
    event.preventDefault();
    const success = await update(originalRoutineActivity.routineActivityId, {
      count,
      duration,
    });

    if (success) {
      navigate("/my-routines");
    }
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
      className="grow flex flex-col gap-4 lg:max-w-xl "
    >
      <h3 className="text-gray-900 text-2xl">
        {originalRoutineActivity?.name}
      </h3>

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

      <PrimaryButton value={"login"} />
    </form>
  );
}
