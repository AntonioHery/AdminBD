import React from "react";
import CustomTable from "./components/CustomTable";
import AfficheBloc from "./components/AfficheBloc";

const Page = () => {
  return (
    <>
      <div>Dashbord suivi de la base de donnees</div>
      <CustomTable />
      <AfficheBloc/>
    </>
  );
};

export default Page;
