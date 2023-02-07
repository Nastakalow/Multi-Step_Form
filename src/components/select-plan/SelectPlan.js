import PlanCards from "./PlanCards";
import PlanToggle from "./PlanToggle";
import SelectPlanBtns from "./SelectPlanBtns";
import SelectPlanTitle from "./SelectPlanTitle";

function SelectPlan() {
  return (
    <>
      <SelectPlanTitle
        title={"Select your plan"}
        subtitle={"You have the option of monthly or yearly billing."}
      />
      <div className="mb-auto">
        <PlanCards />
        <PlanToggle />
      </div>
      <SelectPlanBtns />
    </>
  );
}

export default SelectPlan;
