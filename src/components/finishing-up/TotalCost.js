import React from "react";

function TotalCost({ plan, total }) {
  return (
    <div className="flex justify-between px-6">
      <h3 className="text-cool-gray text-sm">Total (per {plan})</h3>
      <p className="text-purplish-blue text-lg font-bold">{total}</p>
    </div>
  );
}

export default TotalCost;
