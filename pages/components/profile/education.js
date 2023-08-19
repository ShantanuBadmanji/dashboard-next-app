import { useRef, useState } from "react";
import ProfileButton from "../buttons/profile_button";
import _ from "lodash";
import Image from "next/image";

export default function Education({ EducationDetails }) {
  const EduRef = useRef(EducationDetails);
  const [editingEducation, setEditingEducation] = useState(false);
  function handleEdit(e) {
    e.preventDefault();
    const input = e.target;
    console.log(e.target);

    EduRef.current = input.value;
    setEditingEducation(false);
    console.log("setEditingName changed to false");
  }
  return (
    <form
      className="profile-section flex flex-col gap-4 p-3"
      style={!null && { border: "hidden" }}
      onSubmit={handleEdit}
    >
      <div className="flex justify-between items-center px-5 py-0">
        {/* <span className="flex flex-col justify-start"> */}
        <h2 className="text-slate-600 text-lg font-medium">Education</h2>
        {/* </span> */}
        {editingEducation ? (
          <ProfileButton key={0} text="Done" type={"submit"} />
        ) : (
          <ProfileButton
            key={1}
            text="Edit"
            handleClick={() => setEditingEducation(true)}
          />
        )}
      </div>
      {editingEducation ? null : null}

      <Qualification
        yearOfService="7years (2014, 2021)"
        jobType="partTime"
        orgaisation="coding Ninjas"
        role="Full-stack-developer"
      />
      <Qualification />
    </form>
  );
}
function Qualification({
  timeInterval = "4years (2014, 2019)",
  institueName = "IIM Banglore",
  courseName = "Btech",
  details = "DETAILS SDKFJDHSFKDFLSDJS",
}) {
  return (
    <div className="profile-section flex  items-stretch px-2 py-0 gap-7 ">
      <span className="flex flex-wrap flex-col gap-3  p-2 flex-grow">
        <span className="flex flex-wrap  self-start items-stretch gap-3 ">
          <h2 className="text-purple-700 text-sm">{institueName}</h2>
        </span>
        <span className="flex flex-wrap  justify-between items-stretch gap-3 flex-grow text-slate-600">
          <h2 className="">{timeInterval}</h2>
          <p className="">- -{courseName}</p>
        </span>
        <p>{details}</p>
      </span>
    </div>
  );
}
