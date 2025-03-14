"use client";

import jwt from "jsonwebtoken";
//import { IToken } from "../type";
import FormRetrait from "./formRetrait";
import { IToken } from "../type";
import TableRetrait from "./tableRetrait";
import { Flex } from "@mantine/core";

const UserPage = () => {
  const token = localStorage.getItem("access_token");

  const decodedToken = jwt.decode(token!) as IToken; // decoder le token
  console.log("Token décodé :", decodedToken);
  const numCompteString = JSON.stringify(decodedToken.numCompte);
  const numCompte = parseInt(numCompteString); // converit en type nombre
  const nomClient = JSON.stringify(decodedToken.nomClient);

  return (
    <div>
      <h1>
        {" "}
        Bienvenue sur votre espace client {nomClient} {numCompte}
      </h1>
      <Flex gap="xl" direction="row">
        <FormRetrait numCompte={numCompte} />
        <TableRetrait numCompte={numCompte} />
      </Flex>
    </div>
  );
};

export default UserPage;
