import Image from "next/image";
import ConnectButton from "./buttons/connect_button";

export default function ProfileCard({
  buttonType,
  handleClick,
  pName = "fnfgdgfdbdf",
  role = "",
  imgURL = "/",
}) {
  return (
    <div className=" flex  justify-stretch max-w-sm w-60 h-36 bg-white border border-gray-200 rounded-lg shadow text-sm p-2">
      <div className="flex-grow flex flex-col justify-around">
        <div>
          <h5 className="mb-1  font-medium text-gray-900 ">{pName}</h5>
          <span className="text-xs text-gray-500 ">{role}</span>
        </div>
        <ConnectButton text={buttonType} handleClick={handleClick} />
      </div>
      <div>
        <Image
          className=" float-right w-24 h-24 mb-1 mx-0 rounded-full shadow-lg"
          src={imgURL}
            // src="/docs/images/people/profile-picture-3.jpg"
          alt={`${pName}.img`}
          width={90}
          height={90}
        />
      </div>
    </div>
  );
}
