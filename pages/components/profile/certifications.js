import { useRef, useState } from "react";
import ProfileButton from "../buttons/profile_button";
import _ from "lodash";
import Image from "next/image";

export default function Certifications({ certifications }) {
  const aboutRef = useRef(certifications);
  const [editingCertifications, setEditingCertifications] = useState(false);
  function handleEdit(e) {
    e.preventDefault();
    const input = e.target[1];
    console.log(input);

    aboutRef.current = input.value;
    setEditingCertifications(false);
    console.log("setEditingName changed to false");
  }
  return (
    <form
      className="profile-section flex flex-col gap-4 p-3"
      style={null && { border: "hidden" }}
      onSubmit={handleEdit}
    >
      <div className="flex justify-between items-center px-5 py-0">
        <h2 className="text-slate-600 text-lg font-medium">Certifications</h2>

        {editingCertifications ? (
          <ProfileButton key={0} text="Done" type={"submit"} />
        ) : (
          <ProfileButton
            key={1}
            text="Edit"
            handleClick={() => setEditingCertifications(true)}
          />
        )}
      </div>
      {editingCertifications ? null : null}
      <Certificate topic="Python" orgaisation="Coding Ninjas" imgURL="" />
      <Certificate topic="Python" orgaisation="Coding Ninjas" imgURL="" />
      <Certificate topic="Python" orgaisation="Coding Ninjas" imgURL="" />
      <Certificate topic="Python" orgaisation="Coding Ninjas" imgURL="" />
    </form>
  );
}

function Certificate({
  topic,
  orgaisation,
  imgURL = "/professtional_details.svg",
}) {
  return (
    <div
      className="profile-section flex  items-center p-1 gap-7 "
      style={{ borderRadius: "100rem" }}
    >
      <Image
        src={imgURL ? imgURL : "/professtional_details.svg"}
        width={50}
        height={50}
        alt="professtional-details-image"
      />
      <span className="flex flex-col justify-start items-center gap-3 flex-grow">
        <h2 className="text-slate-600 ">{topic}</h2>
        <p>{orgaisation}</p>
      </span>
    </div>
  );
}
