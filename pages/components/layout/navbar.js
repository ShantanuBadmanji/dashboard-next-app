import Image from "next/image";
import Logout from "../buttons/logout";

export default function Navbar() {
  return (
    <div className="flex justify-between items-stretch h-20 py-4 px-6 shadow-md">
      <Image src="cru-logo.svg" width={60} height={30} alt="main-logo" />
      <div className="flex items-center  justify-between gap-4">
        <Image
          src="notification.svg"
          alt="notification-icon"
          width={30}
          height={30}
        />
        <Logout />
      </div>
    </div>
  );
}
