function MultiStepForm({ children }) {
  return (
    <div className="sm:flex bg-white p-4 rounded-lg shadow-lg w-[56rem] h-[36rem] max-sm:w-10/12 max-sm:h-fit max-sm:px-6 max-sm:py-10 max-sm:mt-24 max-sm:mx-auto">
      {children}
    </div>
  );
}

export default MultiStepForm;
