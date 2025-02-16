import React from "react";
import CustomTable from "../admin/components/CustomTable";
import { NumberInput, Button, Title } from "@mantine/core";

const UserPage = () => {
  return (
    <>
      <div className="mb-8">
      <Title order={3}>Mes retraits</Title>
      </div>
      <div className="flex gap-8 ">
        <form className="flex flex-col justify-between space-y-4 bg-gray-100 px-8 py-6 w-3/5 h-48">
          <NumberInput label="Montant " />
          <Button>Effectuer Retrait</Button>
        </form>
        <CustomTable />
      </div>
    </>
  );
};

export default UserPage;
