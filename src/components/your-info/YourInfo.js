import { useDispatch, useSelector } from "react-redux";
import {
  setNameValue,
  setEmailValue,
  setPhoneValue,
  checkName,
  checkNameValidate,
  checkEmail,
  checkEmailValidate,
  checkPhone,
  checkPhoneValidate,
} from "../../features/multistep-form/multistepFormSlice";
import YourInfoBtns from "./YourInfoBtns";
import YourInfoTitle from "./YourInfoTitle";

function YourInfo() {
  const dispatch = useDispatch();

  const { nameInfo, emailInfo, phoneInfo } = useSelector(
    (state) => state.multistepForm
  );
  const onChangeName = (e) => {
    dispatch(setNameValue(e.target.value));

    e.target.value ? dispatch(checkNameValidate()) : dispatch(checkName());
  };
  const onChangeEmail = (e) => {
    dispatch(setEmailValue(e.target.value));

    e.target.value ? dispatch(checkEmailValidate()) : dispatch(checkEmail());
  };
  const onChangePhone = (e) => {
    dispatch(setPhoneValue(e.target.value));

    e.target.value ? dispatch(checkPhoneValidate()) : dispatch(checkPhone());
  };

  return (
    <>
      <YourInfoTitle
        title={"Personal info"}
        subtitle={"Please provide your name, email address, and phone number."}
      />
      <div className="mb-auto">
        <form action="#">
          <div className="flex flex-col mb-5">
            <div className="flex items-center justify-between">
              <label
                className="text-sm text-marine-blue font-medium mb-1"
                htmlFor=""
              >
                Name
              </label>
              {nameInfo.error !== "" ? (
                <p className="text-strawberry-red font-semibold text-sm">
                  {nameInfo.error}
                </p>
              ) : (
                ""
              )}
            </div>
            <input
              onChange={onChangeName}
              className={`border focus:border-purplish-blue ${
                nameInfo.error !== ""
                  ? "border-strawberry-red"
                  : "border-light-gray"
              }  rounded-lg py-2 px-4 outline-0`}
              type="text"
              placeholder="e.g. Ramazan"
            />
          </div>
          <div className="flex flex-col mb-5">
            <div className="flex items-center justify-between">
              <label
                className="text-sm text-marine-blue font-medium mb-1"
                htmlFor=""
              >
                Email
              </label>
              {emailInfo.error !== "" ? (
                <p className="text-strawberry-red font-semibold text-sm">
                  {emailInfo.error}
                </p>
              ) : (
                ""
              )}
            </div>
            <input
              onChange={onChangeEmail}
              className={`border focus:border-purplish-blue ${
                emailInfo.error !== ""
                  ? "border-strawberry-red"
                  : "border-light-gray"
              }  rounded-lg py-2 px-4 outline-0`}
              type="email"
              placeholder="e.g. nastakalov@hotmail.com"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center justify-between">
              <label
                className="text-sm text-marine-blue font-medium mb-1"
                htmlFor=""
              >
                Phone Number
              </label>
              {phoneInfo.error !== "" ? (
                <p className="text-strawberry-red font-semibold text-sm">
                  {phoneInfo.error}
                </p>
              ) : (
                ""
              )}
            </div>
            <input
              onChange={onChangePhone}
              className={`border focus:border-purplish-blue ${
                phoneInfo.error !== ""
                  ? "border-strawberry-red"
                  : "border-light-gray"
              }  rounded-lg py-2 px-4 outline-0`}
              type="tel"
              placeholder="e.g. +1 234 567 890"
            />
          </div>
        </form>
      </div>
      <YourInfoBtns />
    </>
  );
}

export default YourInfo;
