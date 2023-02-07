import { useSelector } from "react-redux";
import SelectedOns from "./SelectedOns";
import SelectedPlan from "./SelectedPlan";
import SummaryBtns from "./SummaryBtns";
import SummaryTitle from "./SummaryTitle";
import TotalCost from "./TotalCost";

function FinishingUp() {
  const selectedPlan = JSON.parse(localStorage.getItem("selectedPlan"));
  const selectedOns = JSON.parse(localStorage.getItem("selectedOns"));
  const total = localStorage.getItem("total");
  const isPlanYearly = localStorage.getItem("isPlanYearly");

  return (
    <>
      <SummaryTitle
        title={"Finishing up"}
        subtitle={"Double-check everything looks OK before confirming."}
      />
      <div className="p-5 bg-alabaster rounded-md mb-6">
        <SelectedPlan title={selectedPlan.title} cost={selectedPlan.cost} />
        {selectedOns.map((ons, index) => (
          <SelectedOns key={`ons-${index}`} title={ons.title} cost={ons.cost} />
        ))}
      </div>
      <div className="mb-auto">
        <TotalCost
          plan={isPlanYearly ? "year" : "month"}
          total={isPlanYearly ? "+$" + total + "/yr" : "+$" + total + "/mo"}
        />
      </div>
      <SummaryBtns />
    </>
  );
}

export default FinishingUp;
