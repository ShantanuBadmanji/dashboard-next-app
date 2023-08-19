import Image from "next/image";
import ProfileButton from "../buttons/profile_button";

export default function ProfilePhoto({ imgURL, pName }) {
  return (
    <div className="flex justify-between items-center p-3">
      <Image
        className=" w-24 h-24 mb-1 mx-0 rounded-full shadow-lg"
        src={imgURL}
        //   src="/docs/images/people/profile-picture-3.jpg"
        alt={`${pName}.img`}
        width={90}
        height={90}
      />
      <ProfileButton text="Upload Photo" />
    </div>
  );
}
