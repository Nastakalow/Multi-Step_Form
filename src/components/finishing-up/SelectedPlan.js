import { Link } from "react-router-dom";

function SelectedPlan({ title, cost }) {
  return (
    <div className="flex items-center justify-between border-b border-light-gray mb-5 pb-5">
      <div>
        <h2 className="text-marine-blue font-bold">{title}</h2>
        <Link to={"/select-plan"} className="underline text-visited text-sm">
          Change
        </Link>
      </div>
      <p className="text-marine-blue text-md font-bold">{cost}</p>
    </div>
  );
}

export default SelectedPlan;
