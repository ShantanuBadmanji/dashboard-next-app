import { useState } from "react";
import Sidebar from "../components/layout/sidebar";
import Navbar from "../components/layout/navbar";
import DisplayProfile from "../components/display_profile";
import DisplayConnections from "../components/display_connections";

export default function Dashboard() {
  const [openMenu, setopenMenu] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  function handleSelectedIndex(index) {
    setSelectedIndex(index);
    console.log(index);
  }
  return (
    <div className="xl:container mx-auto flex h-screen">
      <Sidebar
        selectedIndex={selectedIndex}
        setSelectedIndex={handleSelectedIndex}
      />
      <div className="flex-grow flex flex-col">
        <Navbar />
        <div className="bg-slate-100 flex-grow">
          {(selectedIndex === 0 && <DisplayProfile />) ||
            (selectedIndex === 1 && <DisplayConnections />)}
        </div>
      </div>
    </div>
  );
}
