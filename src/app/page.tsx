"use client";
import useFetchUsers from "@/hooks/userHooks/useFetchUsers";
import React, { useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [isSynced, setIsSynced] = useState(false);

  // Step 1: Create a new branch
  // Step 2: Do tasks
  // Step 3: Commit your changes using appropriate commit message
  // Step 4: Push your changes to the remote repository
  // Step 5: Create a pull request using your full name as a title

  // Bonus:
  // - Add the type of items state
  // - Make this root page server-side component

  const USER_API = "https://jsonplaceholder.typicode.com/users";

  // TODO: Implement function to handle sync button click

  const { data, isLoading, error } = useFetchUsers();
  const handleSyncData = () => {
    // ...
  };

  console.log(data);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p className=""> Something went wrong</p>;
  if (data)
    return (
      <div>
        <div className=" w-full flex flex-col items-center py-10 gap-2">
          <p className=" text-2xl font-bold">Simple CRUD Application</p>
          <button
            className="bg-blue-500 text-white px-2 py-1 w-min rounded shadow"
            onClick={() => setIsSynced(!isSynced)}
          >
            {isSynced ? "Sync" : "UnSync"}
          </button>
        </div>
        <div className=" w-1/2 flex flex-col items-center">
          <p className=" font-bold text-xl">Item list</p>
          <ul className=" px-10 flex flex-col  gap-5 w-full ">
            {data.map((user) => (
              <li className=" bg-neutral-100 w-full p-2 rounded shadow flex justify-between">
                {user.name}
                <button className=" rounded bg-red-400 text-white px-2 py-1">
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
}

export default App;
