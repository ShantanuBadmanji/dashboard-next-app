import _ from "lodash";

export default function ConnectButton({ text, handleClick }) {
  return (
    <button
      type="button"
      className={`common-btn connection-btn mt-5 ${
        _.toLower(text) === "remove connection" && "text-xs"
      }`}
      onClick={handleClick}
    >
      <span>{text}</span>
    </button>
  );
}
