import { useRef, useState } from "react";
import ProfileButton from "../buttons/profile_button";
import _ from "lodash";

export default function ContactInfo({ pName, email, phoneNo }) {
  const nameRef = useRef(pName);
  const emailRef = useRef(email);
  const phoneNoRef = useRef(phoneNo);
  const [editingName, setEditingName] = useState(false);
  const [editingEmail, setEditingEmail] = useState(false);
  const [editingPhoneNo, setEditingPhoneNo] = useState(false);
  function handleEdit(e) {
    e.preventDefault();
    const input = e.target[0];
    console.log(input);

    switch (input.name) {
      case "yourName": {
        nameRef.current = input.value;

        setEditingName(false);
        console.log("setEditingName changed to false");
        break;
      }
      case "email": {
        emailRef.current = input.value;
        setEditingEmail(false);
        break;
      }
      case "phoneNumber": {
        phoneNoRef.current = input.value;
        setEditingPhoneNo(false);
        break;
      }

      default:
        console.log("Error in editing contact info ");
        break;
    }
  }
  return (
    <div className="profile-section flex flex-col gap-4 p-3">
      {/* for name */}
      <InfoForm
        handleEdit={handleEdit}
        labelName="Your Name"
        placeholder={pName}
        editedValue={nameRef.current}
        editingState={editingName}
        handleClick={() => setEditingName(true)}
      />{" "}
      {/* for email */}
      <InfoForm
        handleEdit={handleEdit}
        labelName="Email"
        placeholder={email}
        editedValue={emailRef.current}
        editingState={editingEmail}
        handleClick={() => setEditingEmail(true)}
      />{" "}
      {/* for phoneNO */}
      <InfoForm
        handleEdit={handleEdit}
        labelName="Phone Number"
        placeholder={phoneNo}
        editedValue={phoneNoRef.current}
        editingState={editingPhoneNo}
        handleClick={() => setEditingPhoneNo(true)}
      />
    </div>
  );
}
function InfoForm({
  handleEdit,
  labelName,
  editedValue,
  editingState,
  handleClick,
}) {
  return (
    <form
      className="flex justify-between items-center px-5 py-0"
      onSubmit={handleEdit}
    >
      <span className="flex flex-col justify-start">
        <label className="text-slate-600" htmlFor={_.camelCase(labelName)}>
          {labelName}
        </label>
        {editingState ? (
          <input
            className="text-slate-600 rounded-md border border-slate-200 p-1"
            type={_.camelCase(labelName) === "email" ? "email" : "text"}
            placeholder={editedValue}
            name={_.camelCase(labelName)}
            required
          ></input>
        ) : (
          <p>{editedValue}</p>
        )}
      </span>
      {editingState ? (
        <ProfileButton key={0} text="Done" type={"submit"} />
      ) : (
        <ProfileButton key={1} text="Edit" handleClick={handleClick} />
      )}
    </form>
  );
}
