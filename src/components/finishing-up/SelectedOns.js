function SelectedOns({ title, cost }) {
  return (
    <div className="flex items-center justify-between mb-3">
      <h3 className="text-cool-gray text-sm">{title}</h3>
      <p className="text-marine-blue text-xs font-semibold">{cost}</p>
    </div>
  );
}

export default SelectedOns;
