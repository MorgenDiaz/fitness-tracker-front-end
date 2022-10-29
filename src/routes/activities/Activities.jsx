import { useEffect } from "react";
import { getAll } from "../../api/activities-controller";

export default function Activities() {
  useEffect(() => {
    const getAllActivities = async () => {
      try {
        const data = await getAll();
        console.log("activities: ", data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllActivities();
  }, []);

  return (
    <div className="grow flex flex-col place-content-evenly content-evenly pt-10">
      <h2 className="pb-6 text-2xl font-semibold self-center text-gray-900 tracking-wide uppercase ">
        {"Activities"}
      </h2>
    </div>
  );
}
