import MenuLink from "../buttons/menu_links";

export default function Sidebar({ selectedIndex, setSelectedIndex }) {
  return (
    <div className=" flex flex-col gap-5 max-w-xs absolute z-10 h-screen bg-white  flex-grow md:relative md:z-0 md:block ">
      <div className="flex h-20 py-4 px-6 ">
        <button className="h-10 w-44 px-6 font-semibold rounded-md border border-slate-200 text-slate-900">
          Dashboard
        </button>
      </div>
      <div>
        <MenuLink
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
          index={0}
        >
          My Profile
        </MenuLink>
        <MenuLink
          index={1}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        >
          My Connections
        </MenuLink>
      </div>
    </div>
  );
}
