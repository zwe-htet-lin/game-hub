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
import { Platform } from "@/hooks/useGame"
import { ReactElement } from "react";

interface Props {
  platforms: Platform[]
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
      {platforms.map(platform => 
        <div className="px-1">{icons[platform.slug]}</div>
      )}
    </div>
  )
}

export default PlatformIcon