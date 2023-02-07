import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  checkName,
  checkNameValidate,
  checkEmail,
  checkEmailValidate,
  checkPhone,
  checkPhoneValidate,
  setYourInfoAccept,
} from "../../features/multistep-form/multistepFormSlice";

function YourInfoBtns() {
  const { isYourInfoAccept, emailInfo, nameInfo, phoneInfo } = useSelector(
    (state) => state.multistepForm
  );
  const dispatch = useDispatch();

  const checkForm = () => {
    dispatch(setYourInfoAccept());
    dispatch(checkPhone());

    nameInfo.value ? dispatch(checkNameValidate()) : dispatch(checkName());
    emailInfo.value ? dispatch(checkEmailValidate()) : dispatch(checkEmail());
    phoneInfo.value ? dispatch(checkPhoneValidate()) : dispatch(checkPhone());
  };

  return (
    <div className="flex max-sm:absolute max-sm:inset-x-0 max-sm:bottom-0 max-sm:bg-white max-sm:py-4 max-sm:px-8">
      <Link
        to={`${isYourInfoAccept ? "/select-plan" : "/"}`}
        className={
          "bg-marine-blue hover:bg-marine-blue-hover transition duration-150 ease-in-out text-alabaster cursor-pointer rounded-md py-3 px-6 font-Ubuntu-Medium text-sm ml-auto"
        }
        onClick={checkForm}
      >
        Next Step
      </Link>
    </div>
  );
}

export default YourInfoBtns;
