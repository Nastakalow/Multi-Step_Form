import ReactDOM from "react-dom/client";

import "./index.css";
import "./style.css";

import App from "./App";
import YourInfo from "./components/your-info/YourInfo";
import SelectPlan from "./components/select-plan/SelectPlan";
import AddOns from "./components/add-ons/AddOns";
import FinishingUp from "./components/finishing-up/FinishingUp";
import ThankYou from "./components/thank-you/ThankYou";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        element: <YourInfo />,
        index: true,
      },
      {
        path: "select-plan",
        element: <SelectPlan />,
      },
      {
        path: "add-ons",
        element: <AddOns />,
      },
      {
        path: "summary",
        element: <FinishingUp />,
      },
      {
        path: "thank-you",
        element: <ThankYou />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
