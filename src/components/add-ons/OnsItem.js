import { useDispatch } from "react-redux";
import {
  addSelectedOns,
  clickedOns,
} from "../../features/multistep-form/multistepFormSlice";

function OnsItem({ clicked, title, subtitle, cost }) {
  const dispatch = useDispatch();

  const onChange = () => {
    dispatch(clickedOns(title));
    dispatch(addSelectedOns({ title, cost }));
  };

  return (
    <div
      className={`flex items-center justify-between cursor-pointer mb-4 border ${
        clicked === "true" ? "border-purplish-blue" : "border-light-gray"
      } py-3 px-6 rounded-md max-sm:px-4`}
    >
      <input
        onChange={onChange}
        className="w-5 h-5 accent-purplish-blue mr-6 max-sm:mr-4"
        type="checkbox"
        checked={`${clicked === "true" ? "checked" : ""}`}
        name=""
        id=""
      />
      <div className="mr-auto">
        <h3 className="text-marine-blue font-semibold">{title}</h3>
        <p className="text-cool-gray text-xs">{subtitle}</p>
      </div>
      <div>
        <p className="text-purplish-blue font-medium text-sm max-sm:text-xs">
          {cost}
        </p>
      </div>
    </div>
  );
}

export default OnsItem;
