"use client";
import React from "react";

import CustomTable from "./components/CustomTable";
import AfficheBloc from "./components/AfficheBloc";
import { useRouter } from "next/navigation";
import { Button, Title } from "@mantine/core";

const Page = () => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    router.push("auth/login");
  };

  return (
    <>
      <div className="flex flex-ro justify-between mb-5">
        <Title order={3} >Dashboard de suivi des actions bancaires</Title>
        <Button color="rgba(33, 7, 7, 1)" onClick={handleLogout}>
          Deconnexion
        </Button>
      </div>
      <AfficheBloc />
      <CustomTable />

      
    </>
  );
};

export default Page;
