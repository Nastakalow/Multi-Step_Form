function AddOnsTitle({ title, subtitle }) {
  return (
    <div className="mb-10 max-sm:mb-6">
      <h1 className="text-3xl font-Ubuntu-Bold text-marine-blue mb-2">
        {title}
      </h1>
      <p className="text-cool-gray">{subtitle}</p>
    </div>
  );
}

export default AddOnsTitle;
