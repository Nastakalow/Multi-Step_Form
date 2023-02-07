function MainSide({ children }) {
  return (
    <div className="flex flex-col justify-between basis-5/6 pl-24 pt-9 pr-20 pb-2 max-sm:p-0 max-sm:basis-auto">
      {children}
    </div>
  );
}

export default MainSide;
