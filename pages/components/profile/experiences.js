import { useRef, useState } from "react";
import ProfileButton from "../buttons/profile_button";
import _ from "lodash";
import Image from "next/image";

export default function Experiences({ EducationDetails }) {
  const EduRef = useRef(EducationDetails);
  const [editingExperiences, setEditingExpreriences] = useState(false);
  function handleEdit(e) {
    e.preventDefault();
    const input = e.target;
    console.log(e.target);

    EduRef.current = input.value;
    setEditingExpreriences(false);
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
        <h2 className="text-slate-600 text-lg font-medium">Experience</h2>
        {/* </span> */}
        {editingExperiences ? (
          <ProfileButton key={0} text="Done" type={"submit"} />
        ) : (
          <ProfileButton
            key={1}
            text="Edit"
            handleClick={() => setEditingExpreriences(true)}
          />
        )}
      </div>
      {editingExperiences ? null : null}

      <Experience
        yearOfService="7years (2014, 2021)"
        jobType="partTime"
        orgaisation="coding Ninjas"
        role="Full-stack-developer"
        imgURL="/professtional_details.svg"
      />
      <Experience />
    </form>
  );
}
function Experience({
  yearOfService = "7years (2014, 2021)",
  jobType = "partTime",
  orgaisation = "coding Ninjas",
  role = "Full-stack-developer",
  imgURL = "/professtional_details.svg",
}) {
  return (
    <div className="profile-section flex  items-stretch p-2 gap-7 ">
      <span className="flex flex-wrap flex-col gap-3 flex-grow">
        <span className="flex flex-wrap  justify-around items-stretch gap-3 ">
          <h2 className="">{yearOfService}</h2>
          <p>{jobType}</p>
        </span>
        <span className="flex flex-wrap  justify-around items-stretch gap-3 flex-grow text-slate-600">
          <h2 className="">{orgaisation}</h2>
          <p>- -{role}</p>
        </span>
      </span>
      <Image
        src={imgURL ? imgURL : "/professtional_details.svg"}
        width={50}
        height={50}
        alt="professtional-details-image"
      />
    </div>
  );
}
