import MenuItem from "./MenuItem";

function MenuList() {
  return (
    <div className="basis-2/6 bg-sidebar-bg bg-no-repeat bg-left p-8 rounded-lg text-white max-sm:absolute max-sm:-z-10 max-sm:inset-x-0 max-sm:top-0 max-sm:rounded-none max-sm:bg-cover max-sm:bg-[center_-35.9rem] max-sm:h-44 max-sm:flex max-sm:items-start max-sm:justify-center max-sm:gap-6 ">
      <MenuItem stepNumber={1} stepText={"step 1"} title={"your info"} />
      <MenuItem stepNumber={2} stepText={"step 2"} title={"select plan"} />
      <MenuItem stepNumber={3} stepText={"step 3"} title={"add-ons"} />
      <MenuItem stepNumber={4} stepText={"step 4"} title={"summary"} />
    </div>
  );
}

export default MenuList;
