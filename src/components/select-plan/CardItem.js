import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clickedPlan,
  selectPlan,
} from "../../features/multistep-form/multistepFormSlice";

function CardItem({ clicked, bgImage, title, cost }) {
  const { isPlanYearly } = useSelector((state) => state.multistepForm);
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(selectPlan({ title, cost }));
    dispatch(clickedPlan(title));
  };

  useEffect(() => {
    localStorage.setItem(
      "selectedPlan",
      JSON.stringify({ title: "Arcade", cost: "$9/mo" })
    );
    localStorage.setItem("arcadeClicked", "true");
  }, []);

  return (
    <div
      onClick={onClick}
      className={`border ${
        clicked === "true" ? "border-purplish-blue" : "border-light-gray"
      } hover:border-purplish-blue cursor-pointer rounded-lg p-4 flex-1 max-sm:flex max-sm:gap-4 max-sm:items-center`}
    >
      <div
        className={`${bgImage} rounded-full h-10 w-10 bg-no-repeat bg-center sm:mb-10`}
      ></div>
      <div>
        <h3 className="font-Ubuntu-Bold text-marine-blue">{title}</h3>
        <p className="text-sm text-cool-gray mb-1">{cost}</p>
        {isPlanYearly ? (
          <p className="text-marine-blue text-xs font-semibold">
            2 months free
          </p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default CardItem;
