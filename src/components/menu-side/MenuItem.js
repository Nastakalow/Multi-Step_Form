function MenuItem({ stepNumber, stepText, title }) {
  return (
    <>
      <div className="flex gap-4 items-center mb-6">
        <div className="border border-white rounded-full h-9 w-9 flex items-center justify-center">
          <p className="font-Ubuntu-Medium">{stepNumber}</p>
        </div>
        <div className="max-sm:hidden">
          <strong className="text-light-gray uppercase font-medium tracking-wide text-xs">
            {stepText}
          </strong>
          <h2 className="uppercase font-bold tracking-wider text-sm">
            {title}
          </h2>
        </div>
      </div>
    </>
  );
}

export default MenuItem;
