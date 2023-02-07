import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //"YOUR INFO" STEP1
  isYourInfoAccept: false,

  nameInfo: {
    value: "",
    error: "",
    validated: false,
  },

  emailInfo: {
    value: "",
    error: "",
    validated: false,
  },

  phoneInfo: {
    value: "",
    error: "",
    validated: false,
  },

  //"SELECT PLAN" STEP2
  isPlanYearly: false,

  arcadeInfo: {
    monthsCost: 9,
    yearsCost: 90,
    clicked: true,
  },

  advancedInfo: {
    monthsCost: 12,
    yearsCost: 120,
    clicked: false,
  },

  proInfo: {
    monthsCost: 15,
    yearsCost: 150,
    clicked: false,
  },

  //"ADD-ONS" STEP3
  isAddOnsAccept: false,

  onlineServiceInfo: {
    monthsCost: 1,
    yearsCost: 10,
    clicked: false,
  },

  largerStorageInfo: {
    monthsCost: 2,
    yearsCost: 20,
    clicked: false,
  },

  customProfileInfo: {
    monthsCost: 2,
    yearsCost: 20,
    clicked: false,
  },

  //"SUMMARY" STEP4
  selectedPlan: {
    title: "Arcade",
    cost: "$9/mo",
  },

  selectedOns: [],
  total: null,
};

export const multistepFormSlice = createSlice({
  name: "multistepFormSlice",
  initialState,
  reducers: {
    //"YOUR INFO" STEP1
    setNameValue: (state, action) => {
      state.nameInfo.value = action.payload;
    },
    setEmailValue: (state, action) => {
      state.emailInfo.value = action.payload;
    },
    setPhoneValue: (state, action) => {
      state.phoneInfo.value = action.payload;
    },

    checkName: (state) => {
      if (state.nameInfo.value === "") {
        state.nameInfo.error = "This field is required";
      } else {
        state.nameInfo.error = "";
      }
    },
    checkEmail: (state) => {
      if (state.emailInfo.value === "") {
        state.emailInfo.error = "This field is required";
      } else {
        state.emailInfo.error = "";
      }
    },
    checkPhone: (state) => {
      if (state.phoneInfo.value === "") {
        state.phoneInfo.error = "This field is required";
      } else {
        state.phoneInfo.error = "";
      }
    },

    checkNameValidate: (state) => {
      const isValidateName = () => {
        var nameformat = /^[a-zA-Z0-9]{3,15}$/;
        if (nameformat.test(state.nameInfo.value)) {
          state.nameInfo.validated = true;
          return true;
        } else {
          state.nameInfo.validated = false;
          return false;
        }
      };
      const validateName = isValidateName();
      validateName
        ? (state.nameInfo.error = "")
        : (state.nameInfo.error = "Field name must be 3-15 chars long");
    },

    checkEmailValidate: (state) => {
      const isValidateEmail = () => {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (mailformat.test(state.emailInfo.value)) {
          state.emailInfo.validated = true;
          return true;
        } else {
          state.emailInfo.validated = false;
          return false;
        }
      };
      const validateEmail = isValidateEmail();
      validateEmail
        ? (state.emailInfo.error = "")
        : (state.emailInfo.error = "Email address is not valid.");
    },

    checkPhoneValidate: (state) => {
      const isValidatePhone = () => {
        var phoneformat = /^(\+)[1-9]\d{9}$/;
        if (phoneformat.test(state.phoneInfo.value)) {
          state.phoneInfo.validated = true;
          return true;
        } else {
          state.phoneInfo.validated = false;
          return false;
        }
      };
      const validatePhone = isValidatePhone();
      validatePhone
        ? (state.phoneInfo.error = "")
        : (state.phoneInfo.error = "Should be +1 followed by 9 digits.");
    },

    setYourInfoAccept: (state) => {
      if (
        state.nameInfo.value === "" ||
        state.emailInfo.value === "" ||
        state.phoneInfo.value === "" ||
        !state.emailInfo.validated
      ) {
        state.isYourInfoAccept = false;
      } else {
        state.isYourInfoAccept = true;
      }
    },

    //"SELECT PLAN" STEP2
    setPlan: (state) => {
      state.isPlanYearly = !state.isPlanYearly;
      // localStorage.setItem("isPlanYearly", state.isPlanYearly);

      //SELECT PLAN
      if (state.arcadeInfo.clicked) {
        state.isPlanYearly
          ? (state.selectedPlan.cost = "$90/yr")
          : (state.selectedPlan.cost = "$9/mo");
      } else if (state.advancedInfo.clicked) {
        state.isPlanYearly
          ? (state.selectedPlan.cost = "$120/yr")
          : (state.selectedPlan.cost = "$12/mo");
      } else if (state.proInfo.clicked) {
        state.isPlanYearly
          ? (state.selectedPlan.cost = "$150/yr")
          : (state.selectedPlan.cost = "$15/mo");
      }

      //ADD-ONS
      state.selectedOns.forEach((ons) => {
        if (ons.title === "Online service" && state.onlineServiceInfo.clicked) {
          state.isPlanYearly ? (ons.cost = "$10/yr") : (ons.cost = "$1/mo");
        }
        if (ons.title === "Larger storage" && state.largerStorageInfo.clicked) {
          state.isPlanYearly ? (ons.cost = "$20/yr") : (ons.cost = "$2/mo");
        }
        if (
          ons.title === "Customizable profile" &&
          state.customProfileInfo.clicked
        ) {
          state.isPlanYearly ? (ons.cost = "$20/yr") : (ons.cost = "$2/mo");
        }
      });

      localStorage.setItem("selectedPlan", JSON.stringify(state.selectedPlan));
      localStorage.setItem("selectedOns", JSON.stringify(state.selectedOns));
    },

    clickedPlan: (state, action) => {
      switch (action.payload) {
        case "Arcade":
          state.arcadeInfo.clicked = true;
          state.advancedInfo.clicked = false;
          state.proInfo.clicked = false;
          break;
        case "Advanced":
          state.arcadeInfo.clicked = false;
          state.advancedInfo.clicked = true;
          state.proInfo.clicked = false;
          break;
        case "Pro":
          state.arcadeInfo.clicked = false;
          state.advancedInfo.clicked = false;
          state.proInfo.clicked = true;
          break;
        default:
          return state;
      }

      localStorage.setItem("arcadeClicked", state.arcadeInfo.clicked);
      localStorage.setItem("advancedClicked", state.advancedInfo.clicked);
      localStorage.setItem("proClicked", state.proInfo.clicked);
    },

    selectPlan: (state, action) => {
      state.selectedPlan = action.payload;
      localStorage.setItem("selectedPlan", JSON.stringify(state.selectedPlan));
    },

    //"ADD-ONS" STEP3
    clickedOns: (state, action) => {
      switch (action.payload) {
        case "Online service":
          state.onlineServiceInfo.clicked = !state.onlineServiceInfo.clicked;
          break;
        case "Larger storage":
          state.largerStorageInfo.clicked = !state.largerStorageInfo.clicked;
          break;
        case "Customizable profile":
          state.customProfileInfo.clicked = !state.customProfileInfo.clicked;
          break;
        default:
          return state;
      }

      localStorage.setItem(
        "onlineServiceClicked",
        state.onlineServiceInfo.clicked
      );
      localStorage.setItem(
        "largerStorageClicked",
        state.largerStorageInfo.clicked
      );
      localStorage.setItem(
        "customProfileClicked",
        state.customProfileInfo.clicked
      );
    },

    addSelectedOns: (state, action) => {
      switch (action.payload.title) {
        case "Online service":
          if (state.onlineServiceInfo.clicked) {
            state.selectedOns.push(action.payload);
          } else {
            state.selectedOns = state.selectedOns.filter(
              (item) => item.title !== "Online service"
            );
          }
          break;
        case "Larger storage":
          if (state.largerStorageInfo.clicked) {
            state.selectedOns.push(action.payload);
          } else {
            state.selectedOns = state.selectedOns.filter(
              (item) => item.title !== "Larger storage"
            );
          }
          break;
        case "Customizable profile":
          if (state.customProfileInfo.clicked) {
            state.selectedOns.push(action.payload);
          } else {
            state.selectedOns = state.selectedOns.filter(
              (item) => item.title !== "Customizable profile"
            );
          }
          break;
        default:
          return state;
      }
      localStorage.setItem("selectedOns", JSON.stringify(state.selectedOns));
    },

    setAddOnsAccept: (state) => {
      if (
        state.onlineServiceInfo.clicked ||
        state.largerStorageInfo.clicked ||
        state.customProfileInfo.clicked
      ) {
        state.isAddOnsAccept = true;
      } else {
        state.isAddOnsAccept = false;
      }
    },

    //"ADD-ONS" STEP3
    calculateTotal: (state) => {
      let total;
      if (state.arcadeInfo.clicked) {
        total = !state.isPlanYearly
          ? state.arcadeInfo.monthsCost
          : state.arcadeInfo.yearsCost;
      } else if (state.advancedInfo.clicked) {
        total = !state.isPlanYearly
          ? state.advancedInfo.monthsCost
          : state.advancedInfo.yearsCost;
      } else if (state.proInfo.clicked) {
        total = !state.isPlanYearly
          ? state.proInfo.monthsCost
          : state.proInfo.yearsCost;
      }

      if (state.onlineServiceInfo.clicked) {
        total += !state.isPlanYearly
          ? state.onlineServiceInfo.monthsCost
          : state.onlineServiceInfo.yearsCost;
      }
      if (state.largerStorageInfo.clicked) {
        total += !state.isPlanYearly
          ? state.largerStorageInfo.monthsCost
          : state.largerStorageInfo.yearsCost;
      }
      if (state.customProfileInfo.clicked) {
        total += !state.isPlanYearly
          ? state.customProfileInfo.monthsCost
          : state.customProfileInfo.yearsCost;
      }

      state.total = total;
      localStorage.setItem("total", total);
    },
  },
});

export const {
  setNameValue,
  setEmailValue,
  setPhoneValue,
  setYourInfoAccept,
  checkName,
  checkNameValidate,
  checkEmail,
  checkEmailValidate,
  checkPhone,
  checkPhoneValidate,
  setPlan,
  selectPlan,
  clickedPlan,
  clickedOns,
  setAddOnsAccept,
  addSelectedOns,
  calculateTotal,
} = multistepFormSlice.actions;

export default multistepFormSlice.reducer;
