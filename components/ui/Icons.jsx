import { BiArrowBack } from "react-icons/bi";
import { BsCartPlus } from "react-icons/bs";
import { FaRegCalendarPlus, FaRegClock, FaRegUser } from "react-icons/fa";
import { FiSave } from "react-icons/fi";
import { GoPlusCircle } from "react-icons/go";
import {
  IoIosArrowDown,
  IoIosArrowUp,
  IoMdCheckmarkCircleOutline,
  IoMdClose,
} from "react-icons/io";
import { IoSettingsOutline, IoWarningOutline } from "react-icons/io5";
import { LuNotepadText, LuUsers } from "react-icons/lu";
import { MdDeleteForever, MdOutlineHomeRepairService } from "react-icons/md";
import { PiHouseLineBold } from "react-icons/pi";
import { RiResetLeftFill } from "react-icons/ri";

const Icons = {
  Save: FiSave,
  Delete: MdDeleteForever,
  Plus: GoPlusCircle,
  Calendar: FaRegCalendarPlus,
  Cart: BsCartPlus,
  Close: IoMdClose,
  User: FaRegUser,
  Users: LuUsers,
  Clock: FaRegClock,
  CheckMark: IoMdCheckmarkCircleOutline,
  Home: PiHouseLineBold,
  Settings: IoSettingsOutline,
  Service: MdOutlineHomeRepairService,
  Note: LuNotepadText,
  Warnning: IoWarningOutline,
  Reset: RiResetLeftFill,
  Back: BiArrowBack,
  ArrowDown: IoIosArrowDown,
  ArrowUp: IoIosArrowUp,
};

export default Icons;
