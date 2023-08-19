export default function ProfileButton({ text, handleClick, type }) {
  return (
    <button
      type={type ? type : "button"}
      className={`common-btn profile-btn text-[.7rem] px-3 py-1`}
      onClick={handleClick ? handleClick : null}
    >
      <span>{text}</span>
    </button>
  );
}
