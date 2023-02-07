import MultiStepForm from "./components/multistep-form/MultiStepForm";
import MenuList from "./components/menu-side/MenuList";
import MainSide from "./components/main-side/MainSide";
import { Outlet } from "react-router";

export default function App() {
  return (
    <MultiStepForm>
      <MenuList />
      <MainSide>
        <Outlet />
      </MainSide>
    </MultiStepForm>
  );
}
