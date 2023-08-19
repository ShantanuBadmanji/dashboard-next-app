import { useRef, useState } from "react";
import ProfileButton from "../buttons/profile_button";
import _ from "lodash";

export default function AboutMe({ pName, aboutMe }) {
  const aboutRef = useRef(
    aboutMe +
      "dkshksdhvdkhdkvhsd\
  dvdsvsdkjshvskdjvs"
  );
  const [editingAbout, setEditingAbout] = useState(false);
  function handleEdit(e) {
    e.preventDefault();
    const input = e.target[1];
    console.log(input);

    aboutRef.current = input.value;
    setEditingAbout(false);
    console.log("setEditingName changed to false");
  }
  return (
    <InfoForm
      handleEdit={handleEdit}
      editedValue={aboutRef.current}
      editingState={editingAbout}
      handleClick={() => setEditingAbout(true)}
    />
  );
}
function InfoForm({
  pName = "shantanu badmanji",
  handleEdit,
  editedValue,
  editingState,
  handleClick,
}) {
  return (
    <form
      className="profile-section flex flex-col gap-4 p-3"
      onSubmit={handleEdit}
    >
      <div className="flex justify-between items-center px-5 py-0">
        {/* <span className="flex flex-col justify-start"> */}
        <h2 className="text-slate-600 text-lg font-medium ">
          About{" "}
          <span className="text-violet-800 ">
            {_.capitalize(pName.split(" ").at(0))}
          </span>
        </h2>
        {/* </span> */}
        {editingState ? (
          <ProfileButton key={0} text="Done" type={"submit"} />
        ) : (
          <ProfileButton key={1} text="Edit" handleClick={handleClick} />
        )}
      </div>
      {editingState ? (
        <textarea
          rows={5}
          className="text-slate-600 rounded-md border border-slate-200"
          name={_.camelCase("aboutMe")}
          required
        >
          {editedValue}
        </textarea>
      ) : (
        <p>{editedValue}</p>
      )}
    </form>
  );
}
