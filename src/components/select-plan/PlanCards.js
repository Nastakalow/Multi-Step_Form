import { useSelector } from "react-redux";
import CardItem from "./CardItem";

function PlanCards() {
  const { arcadeInfo, advancedInfo, proInfo, isPlanYearly } = useSelector(
    (state) => state.multistepForm
  );

  const arcadeClicked = localStorage.getItem("arcadeClicked");
  const advancedClicked = localStorage.getItem("advancedClicked");
  const proClicked = localStorage.getItem("proClicked");

  return (
    <div className="flex gap-4 mb-9 max-sm:flex-col max-sm:gap-3">
      <CardItem
        clicked={arcadeClicked}
        bgImage={"bg-arcade-icon"}
        title={"Arcade"}
        cost={
          !isPlanYearly
            ? `$${arcadeInfo.monthsCost}/mo`
            : `$${arcadeInfo.yearsCost}/yr`
        }
      />
      <CardItem
        clicked={advancedClicked}
        bgImage={"bg-advanced-icon"}
        title={"Advanced"}
        cost={
          !isPlanYearly
            ? `$${advancedInfo.monthsCost}/mo`
            : `$${advancedInfo.yearsCost}/yr`
        }
      />
      <CardItem
        clicked={proClicked}
        bgImage={"bg-pro-icon"}
        title={"Pro"}
        cost={
          !isPlanYearly
            ? `$${proInfo.monthsCost}/mo`
            : `$${proInfo.yearsCost}/yr`
        }
      />
    </div>
  );
}

export default PlanCards;
