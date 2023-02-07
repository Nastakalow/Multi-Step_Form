import { Link } from "react-router-dom";

function SummaryBtns() {
  return (
    <div className="flex justify-between max-sm:absolute max-sm:inset-x-0 max-sm:bottom-0 max-sm:bg-white max-sm:py-4 max-sm:px-8">
      <Link
        to={"/add-ons"}
        className="cursor-pointer text-cool-gray hover:text-marine-blue  transition duration-150 ease-in-out  font-Ubuntu-Medium"
      >
        Go Back
      </Link>
      <Link
        to={"/thank-you"}
        className="bg-purplish-blue hover:bg-purplish-blue-hover transition duration-150 ease-in-out  text-alabaster cursor-pointer rounded-md py-3 px-6 font-Ubuntu-Medium text-sm ml-auto"
      >
        Confirm
      </Link>
    </div>
  );
}

export default SummaryBtns;
