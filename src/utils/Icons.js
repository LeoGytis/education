import { HiSearch, HiUsers } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { BiShoppingBag } from "react-icons/bi";
import {
  FaStar,
  FaBook,
  FaFacebookF,
  FaTwitter,
  FaPinterest,
  FaGooglePlusG,
  FaInstagram
} from "react-icons/fa";
import { GiOpenBook } from "react-icons/gi";
import { MdOutlineQuestionAnswer } from "react-icons/md";
import { BsFillPlayCircleFill, BsCalendarCheck } from "react-icons/bs";
import { RiUser3Line, RiMailSendLine } from "react-icons/ri";

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
    case "date":
      return <BsCalendarCheck className={className} />;
    case "user":
      return <RiUser3Line className={className} />;
    case "book":
      return <FaBook className={className} />;
    case "subsribe":
      return <RiMailSendLine className={className} />;
    case "facebook":
      return <FaFacebookF className={className} />;
    case "twitter":
      return <FaTwitter className={className} />;
    case "pinterest":
      return <FaPinterest className={className} />;
    case "google":
      return <FaGooglePlusG className={className} />;
    case "instagram":
      return <FaInstagram className={className} />;
    default:
      return null;
  }
};

export default Icons;
