import { HiSearch } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { BiShoppingBag } from "react-icons/bi";

const Icons = ({ name, className }) => {
  switch (name) {
    case "search":
      return <HiSearch className={className} />;
    case "shopbag":
      return <BiShoppingBag className={className} />;
    case "profile":
      return <CgProfile className={className} />;
    default:
      return null;
  }
};

export default Icons;
