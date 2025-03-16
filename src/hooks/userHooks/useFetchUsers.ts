import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";

type user = {
  id: string;
  name: string;
  username: string;
  email: string;
};
const useFetchUsers = () => {
  const fetchUsers = async () => {
    const users = await fetch("");
  };
  return useQuery({
    queryKey: ["todos"],
    queryFn: () =>
      axios
        .get<user[]>("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.data),
  });
};

export default useFetchUsers;
