import { HiSearch, HiUsers } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { BiShoppingBag } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import { GiOpenBook } from "react-icons/gi";
import { MdOutlineQuestionAnswer } from "react-icons/md";
import { BsFillPlayCircleFill } from "react-icons/bs";

const Icons = ({ name, className }) => {
  switch (name) {
    case "search":
      return <HiSearch className={className} />;
    case "shopbag":
      return <BiShoppingBag className={className} />;
    case "profile":
      return <CgProfile className={className} />;
    case "star":
      return <FaStar className={className} />;
    case "students":
      return <HiUsers className={className} />;
    case "lessons":
      return <GiOpenBook className={className} />;
    case "faq":
      return <MdOutlineQuestionAnswer className={className} />;
    case "play":
      return <BsFillPlayCircleFill className={className} />;
    default:
      return null;
  }
};

export default Icons;
