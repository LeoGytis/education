import {
  TiArrowSortedDown,
  TiArrowSortedUp,
  TiArrowUnsorted,
  TiThMenu
} from "react-icons/ti";
import { VscVerified } from "react-icons/vsc";
import { RiArrowDownSLine, RiMap2Fill, RiTempColdLine } from "react-icons/ri";

const Icon = ({ name, className }) => {
  switch (name) {
    case "temp":
      return <RiTempColdLine className={className} />;
    case "layer":
      return <BsLayersHalf className={className} />;
    case "fullscreen":
      return <MdOutlineFullscreen className={className} />;
    case "exitFullScreen":
      return <MdOutlineFullscreenExit className={className} />;
    default:
      return null;
  }
};

export default Icon;
