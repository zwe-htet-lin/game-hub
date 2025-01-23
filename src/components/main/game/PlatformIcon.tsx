import { BsGlobe } from "react-icons/bs";
import {
  FaAndroid,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { ReactElement } from "react";
import { Platform } from "@/hooks/usePlatform";

interface Props {
  platforms: Platform[] | null;
}

const PlatformIcon = ({ platforms }: Props) => {
  const icons: { [key: string]: ReactElement<any, any> } = {
    pc: <FaWindows/>,
    playstation: <FaPlaystation/>,
    xbox: <FaXbox/>,
    nintendo: <SiNintendo/>,
    mac: <FaApple/>,
    linux: <FaLinux/>,
    android: <FaAndroid/>,
    ios: <MdPhoneIphone/>,
    web: <BsGlobe/>,
  }

  return (
    <div className="flex items-center">
      {platforms?.map((platform, index) => 
        <div key={index} className="px-1">{icons[platform.slug]}</div>
      )}
    </div>
  )
}

export default PlatformIcon