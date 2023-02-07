import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPlan } from "../../features/multistep-form/multistepFormSlice";

function PlanToggle() {
  const { isPlanYearly } = useSelector((state) => state.multistepForm);
  const dispatch = useDispatch();
  const changeToggle = () => {
    dispatch(setPlan());
  };

  return (
    <div className="flex align-center justify-center w-full bg-magnolia p-3 rounded-md">
      <label className="flex gap-5 align-center justify-center relative items-center cursor-pointer">
        <p
          className={`${
            !isPlanYearly ? "font-Ubuntu-Bold text-marine-blue" : ""
          } text-sm`}
        >
          Monthly
        </p>
        <input
          onChange={changeToggle}
          type="checkbox"
          value=""
          className="sr-only peer"
        />
        <div className="bg-marine-blue w-10 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[77.3px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        <p
          className={`${
            isPlanYearly ? "font-Ubuntu-Bold text-marine-blue" : ""
          } text-sm`}
        >
          Yearly
        </p>
      </label>
    </div>
  );
}

export default PlanToggle;

{
  /* <p
className={`${
  !isPlanYearly ? "font-Ubuntu-Bold text-marine-blue" : ""
} text-sm`}
>
Monthly
</p> */
}
//  <p
//           className={`${
//             !isPlanYearly ? "font-Ubuntu-Bold text-marine-blue" : ""
//           } text-sm`}
//         >
//           Monthly
//         </p>
