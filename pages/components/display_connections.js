import useSWR from "swr";
import ProfileCard from "./profile_card";

export default function DisplayConnections({
  addConnection,
  removeConnection,
}) {
  const { data, error, isLoading } = useSWR("/api/user", fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  const users = data;
  return (
    <div className="flex-grow flex flex-col px-1 " style={{ height: "80dvh" }}>
      <main className="flex flex-grow flex-col gap-2 p-3 overflow-auto scroll-auto">
        <div className="bg-indigo-900  text-white text-2xl pt-2 pb-8 px-3 rounded-md">
          My Connections
        </div>
        <div className="flex gap-3 flex-wrap px-3 py-2 connected ">
          {users.map(
            (
              { name: pName, role: role, imgURL: imgURL },
              index
            ) => {
              return (
                <ProfileCard
                  key={index}
                  buttonType="Remove Connection"
                  handleClick={addConnection}
                  pName={pName}
                  role={role}
                  imgURL={imgURL}
                />
              );
            }
          )}
        </div>
        <div className="text-2xl pt-12 pb-6 px-3 rounded-md">
          People use can also connect
        </div>
        <div className="flex gap-3 flex-wrap px-3 py-2 connected ">
          {users.map(
            (
              { name: pName, role: role, imgURL: imgURL },
              index
            ) => (
              <ProfileCard
                key={index}
                buttonType="Connect"
                handleClick={addConnection}
                pName={pName}
                  role={role}
                  imgURL={imgURL}
              />
            )
          )}
        </div>
      </main>
    </div>
  );
}

const fetcher = async () => {
  const response = await fetch("http://localhost:4000/users");
  const data = await response.json();
  console.log(data);
  return data;
};
