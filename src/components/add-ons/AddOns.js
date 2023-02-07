import { useSelector } from "react-redux";
import AddOnsBtns from "./AddOnsBtns";
import AddOnsTitle from "./AddOnsTitle";
import OnsItem from "./OnsItem";

function AddOns() {
  const {
    isPlanYearly,
    onlineServiceInfo,
    largerStorageInfo,
    customProfileInfo,
  } = useSelector((state) => state.multistepForm);

  const onlineServiceClicked = localStorage.getItem("onlineServiceClicked");
  const largerStorageClicked = localStorage.getItem("largerStorageClicked");
  const customProfileClicked = localStorage.getItem("customProfileClicked");

  return (
    <>
      <AddOnsTitle
        title={"Pick add-ons"}
        subtitle={"Add-ons help enhance your gaming experience."}
      />
      <div className="flex flex-col mb-auto">
        <OnsItem
          clicked={onlineServiceClicked}
          title={"Online service"}
          subtitle={"Access to multiplayer games"}
          cost={
            !isPlanYearly
              ? `+$${onlineServiceInfo.monthsCost}/mo`
              : `+$${onlineServiceInfo.yearsCost}/yr`
          }
        />
        <OnsItem
          clicked={largerStorageClicked}
          title={"Larger storage"}
          subtitle={"Extra 1TB of cloud save"}
          cost={
            !isPlanYearly
              ? `+$${largerStorageInfo.monthsCost}/mo`
              : `+$${largerStorageInfo.yearsCost}/yr`
          }
        />
        <OnsItem
          clicked={customProfileClicked}
          title={"Customizable profile"}
          subtitle={"Custom theme on your profile"}
          cost={
            !isPlanYearly
              ? `+$${customProfileInfo.monthsCost}/mo`
              : `+$${customProfileInfo.yearsCost}/yr`
          }
        />
      </div>
      <AddOnsBtns />
    </>
  );
}

export default AddOns;
