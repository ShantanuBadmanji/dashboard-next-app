export default function MenuLink({
  children,
  selectedIndex,
  setSelectedIndex,
  index,
}) {
  return (
    <li className="flex justify-start items-center h-20 gap-5 p-5 pl-0 text-slate-900">
      <strong>&gt;</strong>
      <button
        onClick={() => setSelectedIndex(index)}
        className={`h-10  w-44 px-6 font-semibold  text-purple-900 ${
          selectedIndex === index && "rounded-md border  border-purple-900"
        }`}
      >
        {children}
      </button>
    </li>
  );
}
